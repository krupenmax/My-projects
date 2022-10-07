import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { pet } from "./pet";
@Injectable({
  providedIn: "root",
})
export class DataService {
  public pets: Subject<pet[]> = new Subject();
  public center: Subject<number[]> = new Subject();

  public constructor() { }

  public addPets(pets: pet[]): void {
    this.pets.next(pets);
  }

  public changeCenter(center: number[]) {
    this.center.next(center);
  }
}
