import { Injectable } from "@angular/core";
import { Pet } from "./pet";

@Injectable({
  providedIn: "root",
})
export class PopUpService {
  public isPopUp = false;
  public pet: Pet = {
    image: "",
    name: "",
    x: 0,
    y: 0,
  };
  public constructor() { }

  public addPet(name: string, x: number, y: number, imgUrl: string): Pet {
    let pet: Pet = {
      image: imgUrl,
      name: name,
      x: x,
      y: y,
    };
    return pet;
  }
}
