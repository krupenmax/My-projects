import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  public title = "object-map-app";
  public isPopUp = false;
  public constructor() {

  }

  public PopUp(isPop: boolean) {
    this.isPopUp = isPop;
  }
}
