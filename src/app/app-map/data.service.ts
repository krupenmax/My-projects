import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Pet } from "./pet";
@Injectable({
  providedIn: "root",
})
export class DataService {
  public pets: Subject<Pet[]> = new Subject();
  public center: Subject<number[]> = new Subject();

  public constructor() { }

  public addPets(pets: Pet[]): void {
    this.pets.next(pets);
  }

  public changeCenter(center: number[]) {
    this.center.next(center);
  }
}
