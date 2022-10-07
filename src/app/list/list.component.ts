import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { DataService } from "../data.service";
import { pet } from "../pet";

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: "app-list",
  styleUrls: ["./list.component.scss"],
  templateUrl: "./list.component.html",
})
export class ListComponent {
  @Output() public isPopUp = new EventEmitter<boolean>();
  @Input() public pets: pet[] = new Array(); ;
  public constructor(private dataService: DataService) {
  }

  public addPet(): void {
    this.isPopUp.emit(true);
  }

  public centerPet(index: number): void {
    let arr: number[] = new Array();
    arr.push(this.pets[index].x as number);
    arr.push(this.pets[index].y as number);
    this.dataService.changeCenter(arr);
  }
}
