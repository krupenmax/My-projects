import { Component, EventEmitter, Output } from "@angular/core";
import { ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { pet } from "../pet";
import { PopUpService } from "../pop-up.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-list",
  styleUrls: ["./list.component.scss"],
  templateUrl: "./list.component.html",
})
export class ListComponent {
  @Output() public isPopUp = new EventEmitter<boolean>();
  public pets?: pet[] = [{
    image: "../../assets/doggy.jpg",
    name: "Max",
    x: 100,
    y: 200,
  }];
  public constructor(private cdr: ChangeDetectorRef) {
  }

  public addPet(): void {
    this.isPopUp.emit(true);
    this.cdr.detectChanges();
  }

}
