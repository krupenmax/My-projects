import { ChangeDetectionStrategy } from "@angular/core";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html",
})

export class AppComponent {
  public title = "My Projects";

  public constructor(private router: Router) {

  }

  public loadProject(url: string): void {
    this.router.navigateByUrl(url);
  }
}
