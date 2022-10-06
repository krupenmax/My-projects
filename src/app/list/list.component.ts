import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { pet } from "../pet";

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: "app-list",
  styleUrls: ["./list.component.scss"],
  templateUrl: "./list.component.html",
})
export class ListComponent {
  @Output() public isPopUp = new EventEmitter<boolean>();
  @Input() public pets?: pet[];
  public constructor(private cdr: ChangeDetectorRef) {
  }

  public addPet(): void {
    this.isPopUp.emit(true);
  }
}
