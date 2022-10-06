import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ViewContainerRef } from "@angular/core";
import { Component } from "@angular/core";
import { MapComponent } from "./map/map.component";
import { pet } from "./pet";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html",
})

export class AppComponent {
  public pets?: pet[];

  public title = "object-map-app";
  public isPopUp = false;
  public constructor(private cdr: ChangeDetectorRef) {
    this.pets = new Array();
  }

  public PopUp(isPop: boolean): void {
    this.isPopUp = isPop;
  }

  public addPet(newPet: pet): void {
    this.pets?.push(newPet);
    this.cdr.detectChanges();
  }
}
