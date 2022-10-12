import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, delay, from, of, toArray } from "rxjs";
import { myOperator } from "./my-operator";

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: "app-menu",
  styleUrls: ["./menu.component.scss"],
  templateUrl: "./menu.component.html",
})
export class MenuComponent implements OnInit{
  public obs: Observable<number[]> = new Observable();
  public arrNum: number[] = new Array();
  public obsOutput: number[] = new Array();
  public constructor(private router: Router, private cdr: ChangeDetectorRef) {
    for (let i: number = 0; i < 10; i++) {
      this.arrNum.push(i);
    }


  }

  public test() {
    console.log(this.obsOutput);
  }

  public loadProject(url: string): void {
    this.router.navigateByUrl(url);
  }

  public ngOnInit(): void {
    let delayTime: number = 1000;
    this.obs = from(this.arrNum).pipe(
      myOperator(delayTime),
      toArray(),
    );
    this.obs.subscribe({
      complete: () => console.log("Subscription completed."),
      next: (data) => console.log(data),
    });

  }

}
