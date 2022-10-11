import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Observer, Subscriber, of, subscribeOn } from "rxjs";
import { myOperator } from "./my-operator";

@Component({
  selector: "app-menu",
  styleUrls: ["./menu.component.scss"],
  templateUrl: "./menu.component.html",
})
export class MenuComponent implements OnInit{
  public obs: Observable<number[]> = new Observable();
  public arrNum: number[] = [1, 2 , 3];
  public constructor(private router: Router) {

  }

  public loadProject(url: string): void {
    this.router.navigateByUrl(url);
  }

  public test(): void {
    this.obs = new Observable(this.a);
  }

  public a(myObserver: Observer<number[]>) {
    myObserver.next([1, 2, 3, 4, 5, 6]);
    myObserver.complete();
  }

  public ngOnInit(): void {
    this.obs = new Observable(this.a);
    this.obs.pipe(
      myOperator(),
    ).subscribe({
      next: data => {
        console.log(data);
      },
    });
  }

}
