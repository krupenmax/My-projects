import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { myOperator } from "./my-operator";

@Component({
  selector: "app-menu",
  styleUrls: ["./menu.component.scss"],
  templateUrl: "./menu.component.html",
})
export class MenuComponent implements OnInit{
  public obs: Observable<number[]> = new Observable();
  public arrNum: number[] = [1, 2, 3, 4, 5, 6];
  public constructor(private router: Router) {

  }

  public loadProject(url: string): void {
    this.router.navigateByUrl(url);
  }

  public ngOnInit(): void {
    this.obs = of(this.arrNum);
    this.obs.pipe(
      myOperator(1000),
    ).subscribe({
      next: data => {
        console.log(data);
      },
    });
  }

}
