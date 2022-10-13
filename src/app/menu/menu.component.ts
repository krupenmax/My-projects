import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Observer, concatMap, delay, from, map, mergeMap, of, toArray } from "rxjs";
import { myOperator } from "./my-operator";

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: "app-menu",
  styleUrls: ["./menu.component.scss"],
  templateUrl: "./menu.component.html",
})
export class MenuComponent implements OnInit{
  public arrNum: string[] = [];
  public obs: Observable<string[]> = new Observable();
  public obsOutput: number[] = new Array();
  public constructor(private router: Router, private cdr: ChangeDetectorRef) {
  }

  public loadProject(url: string): void {
    this.router.navigateByUrl(url);
  }

  public ngOnInit() {
    this.obs = new Observable<string>(observer => {

      setTimeout(() => {
        observer.next("String send with 2s delay num 1");
        observer.next("String send with 2s delay num 2");
      }, 2000);

      setTimeout(() => {
        observer.next("String send with 12s delay num 1");

      }, 12000);

      setTimeout(() => {
        observer.next("String send with 14s delay num 1");

      }, 14000);

      setTimeout(() => {
        observer.next("String send with 20s delay num 1");
        observer.next("String send with 20s delay num 2");
        observer.next("String send with 20s delay num 3");
        observer.next("String send with 20s delay num 4");
      }, 20000);

      setTimeout(() => {
        observer.complete();
      }, 22000);

      for (let i: number = 0; i < 3; i++) {
        observer.next(`before first delay num ${i}`);
      }
    }).pipe(
      myOperator(1000),
      toArray(),
    );
    this.obs.subscribe({
      complete: () => console.log("Subscription completed."),
      next: (data) => console.log(data),
    });
  }
}
