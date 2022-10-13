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
  public arrNum: string[] = new Array();
  public obs: Observable<string[]> = new Observable();
  public obsOutput: number[] = new Array();
  public constructor(private router: Router, private cdr: ChangeDetectorRef) {
    for (let i: number = 0; i < 10; i++) {
      this.arrNum.push(`${i} awdwad`);
    }


  }

  public test() {
    for (let i: number = 0; i < 10; i++) {
      this.arrNum.push(`${i} ddd`);
    }
    this.obs = from(this.arrNum).pipe(
      myOperator(1000),
      toArray(),
    );
    this.obs.subscribe({
      complete: () => console.log("Subscription completed."),
      next: (data) => console.log(data),
    });
  }

  public loadProject(url: string): void {
    this.router.navigateByUrl(url);
  }

  public ngOnInit(): void {
    this.obs = from(this.arrNum).pipe(
      myOperator(1000),
      toArray(),
    );
    this.obs.subscribe({
      complete: () => console.log("Subscription completed."),
      next: (data) => console.log(data),
    });

  }

}
