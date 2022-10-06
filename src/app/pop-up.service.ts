import { Injectable } from "@angular/core";
import { pet } from "./pet";

@Injectable({
  providedIn: "root",
})
export class PopUpService {
  public isPopUp = false;
  public pet?: pet;
  public constructor() { }

  public addPet(name: string | null, x: number | null, y: number | null, imgUrl: string | null): pet {
    let pet: pet = {
      image: imgUrl,
      name: name,
      x: x,
      y: y,
    };
    return pet;
  }
}
