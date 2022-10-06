import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-pop-up-add",
  styleUrls: ["./pop-up-add.component.scss"],
  templateUrl: "./pop-up-add.component.html",
})
export class PopUpAddComponent {
  public addForm = new FormGroup({
    name: new FormControl(""),
    x: new FormControl(""),
    y: new FormControl(""),
  });
  public constructor() { }

}
