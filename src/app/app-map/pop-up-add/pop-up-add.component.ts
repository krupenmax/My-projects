import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Pet } from "../pet";
import { PopUpService } from "../pop-up.service";
import { validateOnlyNumbers } from "../validators";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-pop-up-add",
  styleUrls: ["./pop-up-add.component.scss"],
  templateUrl: "./pop-up-add.component.html",
})
export class PopUpAddComponent {
  @Output() public pet = new EventEmitter<Pet>;
  @Output() public isPopUp = new EventEmitter<boolean>;
  public fb = new FormBuilder().nonNullable;
  public addForm = new FormGroup({
    name: this.fb.control("", [Validators.required, Validators.maxLength(60)]),
    x: this.fb.control(<number | null> null, [validateOnlyNumbers, Validators.required, Validators.max(180), Validators.min(-180)]),
    y: this.fb.control(<number | null> null, [validateOnlyNumbers, Validators.required, Validators.max(180), Validators.min(-180)]),
  });
  public isAvatarPopUp: boolean = false;
  public avatarUrl: string = "";

  public constructor(private readonly cdr: ChangeDetectorRef, private readonly popUpService: PopUpService) { }

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
    if (this.addForm.valid && this.avatarUrl !== "") {
      this.pet.emit(this.popUpService.addPet(this.addForm.controls["name"].value as string, this.addForm.controls["x"].value as number, this.addForm.controls["y"].value as number, this.avatarUrl));
      this.isPopUp.emit(false);
    }
  }
}
