import { Component } from "@angular/core";
import { ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { pet } from "../pet";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-list",
  styleUrls: ["./list.component.scss"],
  templateUrl: "./list.component.html",
})
export class ListComponent {
  public pets?: pet[] = [{
    image: "../../assets/doggy.jpg",
    name: "Max",
    x: 100,
    y: 200,
  }];
  public constructor(private cdr: ChangeDetectorRef) {
  }

  public addPet(): void {
    this.pets?.push({
      image: "../../assets/cat.jpg",
      name: "Lexus",
      x: 1,
      y: 2,
    });
    this.pets?.push({
      image: "../../assets/gorilla.jpg",
      name: "Ping Pong",
      x: 200,
      y: 89,
    });
    this.pets?.push({
      image: "../../assets/Lion.jpg",
      name: "Raar",
      x: 200,
      y: 89,
    });
    this.pets?.push({
      image: "../../assets/koala.jpg",
      name: "Bruh",
      x: 200,
      y: 89,
    });
    this.pets?.push({
      image: "../../assets/bunny.jpg",
      name: "Sppedy",
      x: 200,
      y: 89,
    });
    this.pets?.push({
      image: "../../assets/tiger.jpg",
      name: "Meow",
      x: 200,
      y: 89,
    });
    this.pets?.push({
      image: "../../assets/fox.jpg",
      name: "Fuhr",
      x: 200,
      y: 89,
    });
    this.cdr.detectChanges();
  }

}
