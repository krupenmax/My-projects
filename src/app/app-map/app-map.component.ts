import { ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { Component } from "@angular/core";
import { Subject } from "rxjs";
import { DataService } from "./data.service";
import { Pet } from "./pet";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-main-map",
  styleUrls: ["./app-map.component.scss"],
  templateUrl: "./app-map.component.html",
})

export class MainComponent {
  public pets: Subject<Pet[]> = new Subject();
  public petArray: Pet[] = [];
  public title = "object-map-app";
  public isPopUp = false;
  public constructor(private cdr: ChangeDetectorRef, private readonly dataService: DataService) {
  }

  public PopUp(isPop: boolean): void {
    this.isPopUp = isPop;
  }

  public addPet(newPet: Pet): void {
    this.petArray.push(newPet);
    let tmpArray: Pet[] = new Array();
    this.petArray.forEach(pet => {
      tmpArray.push(pet);
    });
    this.petArray = tmpArray;
    this.dataService.addPets(this.petArray);
    this.cdr.detectChanges();
  }
}
