import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { pet } from "../pet";
import { PopUpService } from "../pop-up.service";
import { validateCoordinatesMax, validateCoordinatesMin, validateOnlyNumbers } from "../validators";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-pop-up-add",
  styleUrls: ["./pop-up-add.component.scss"],
  templateUrl: "./pop-up-add.component.html",
})
export class PopUpAddComponent {
  @Output() public pet = new EventEmitter<pet>;
  @Output() public isPopUp = new EventEmitter<boolean>;
  public addForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.maxLength(60)]),
    x: new FormControl(<number | null> null, [validateOnlyNumbers, Validators.required, validateCoordinatesMax, validateCoordinatesMin]),
    y: new FormControl(<number | null> null, [validateOnlyNumbers, Validators.required, validateCoordinatesMax, validateCoordinatesMin]),
  });
  public isAvatarPopUp: boolean = false;
  public avatarUrl: string = "";

  public constructor(private cdr: ChangeDetectorRef, private popUpService: PopUpService) { }

  public popUp(): void {
    this.isAvatarPopUp = true;
    this.cdr.detectChanges();
  }

  public addAvatar(url: string): void {
    this.avatarUrl = url;
    this.isAvatarPopUp = false;
    this.cdr.detectChanges();
  }

  public addPet(): void {
    if (this.addForm.valid && this.avatarUrl != "") {
      this.pet.emit(this.popUpService.addPet(this.addForm.controls["name"].value, this.addForm.controls["x"].value, this.addForm.controls["y"].value, this.avatarUrl));
      this.isPopUp.emit(false);
    }
  }
}
