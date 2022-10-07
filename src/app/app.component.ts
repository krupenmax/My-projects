import { ChangeDetectorRef, OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Subject } from "rxjs";
import { DataService } from "./data.service";
import { pet } from "./pet";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html",
})

export class AppComponent implements OnInit {
  public pets: Subject<pet[]> = new Subject();
  public petArray: pet[] = new Array();
  public title = "object-map-app";
  public isPopUp = false;
  public constructor(private cdr: ChangeDetectorRef, private dataService: DataService) {
  }

  public PopUp(isPop: boolean): void {
    this.isPopUp = isPop;
  }

  public addPet(newPet: pet): void {
    this.petArray.push(newPet);
    this.dataService.addPets(this.petArray);
    this.cdr.detectChanges();
  }

  public ngOnInit(): void {
    console.log();
  }
}
