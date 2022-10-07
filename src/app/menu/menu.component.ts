import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-menu",
  styleUrls: ["./menu.component.scss"],
  templateUrl: "./menu.component.html",
})
export class MenuComponent {

  public constructor(private router: Router) {

  }

  public loadProject(url: string): void {
    this.router.navigateByUrl(url);
  }
}
