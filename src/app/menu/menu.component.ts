import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { myOperator } from "./my-operator";

@Component({
  selector: "app-menu",
  styleUrls: ["./menu.component.scss"],
  templateUrl: "./menu.component.html",
})
export class MenuComponent{
  public obs: Observable<number[]> = new Observable();
  public arrNum: number[] = [1, 2 , 3];
  public constructor(private router: Router) {

  }

  public loadProject(url: string): void {
    this.router.navigateByUrl(url);
  }

  public test(): void {
    this.obs = of(this.arrNum);
    this.obs.pipe(
      myOperator(data => this.arrNum, 1000),
    ).subscribe(data => console.log(data));
  }

}
