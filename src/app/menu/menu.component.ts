import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, concatMap, delay, from, map, mergeMap, of, toArray } from "rxjs";
import { myOperator } from "./my-operator";

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: "app-menu",
  styleUrls: ["./menu.component.scss"],
  templateUrl: "./menu.component.html",
})
export class MenuComponent implements OnInit{
  public arrNum: number[] = new Array();
  public obs: Observable<number[]> = new Observable();
  public obsOutput: number[] = new Array();
  public constructor(private router: Router, private cdr: ChangeDetectorRef) {
    for (let i: number = 0; i < 10; i++) {
      this.arrNum.push(i);
    }


  }

  public test() {
    console.log(this.obsOutput);
  }

  public add() {
    this.obs = from([55,1,15,5]).pipe(
      myOperator(500),
      toArray(),
    );
    this.obs.subscribe({
      complete: () => console.log("Subscription completed."),
      next: (data) => {
        console.log(data);
      },
    });
    this.cdr.detectChanges();
  }

  public loadProject(url: string): void {
    this.router.navigateByUrl(url);
  }

  public ngOnInit(): void {
    this.obs = from(this.arrNum).pipe(
      myOperator(500),
      toArray(),
    );
    this.obs.subscribe({
      complete: () => console.log("Subscription completed."),
      next: (data) => console.log(data),
    });

  }

}
