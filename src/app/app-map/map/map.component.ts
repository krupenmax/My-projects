import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import * as L from "leaflet";
import { Subject } from "rxjs";
import { DataService } from "../data.service";
import { Pet } from "../pet";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-map",
  styleUrls: ["./map.component.scss"],
  templateUrl: "./map.component.html",
})

export class MapComponent implements OnInit{
  private map?: L.Map;
  private centroid: L.LatLngExpression = [54.012152, 27.679890];
  public petSubject: Subject<Pet[]> = this.dataService.pets;
  public centerSubject: Subject<number[]> = this.dataService.center;
  public pets: Pet[] = new Array();
  public constructor(private readonly dataService: DataService) {
  }

  public initMap(): void {
    this.map = L.map("map", {
      center: this.centroid,
      zoom: 12,
    });

    const tiles = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap<a/>",
      maxZoom: 18,
    });
    tiles.addTo(this.map);
  }

  public addMarker(): void {
    if (this.pets.length !== 0) {
      let img = this.pets[this.pets.length - 1].image;
      let x = this.pets[this.pets.length - 1].x as number;
      let y = this.pets[this.pets.length - 1].y as number;
      const icon = L.icon({
        iconSize: [45, 63],
        iconUrl: "../../assets/" + img + ".png",
      });
      let marker = L.marker([x, y], { icon: icon }).addTo(this.map as L.Map);
    }
  }

  public ngOnInit(): void {
    this.initMap();
    this.petSubject = this.dataService.pets;
    this.petSubject.subscribe(data => {
      this.pets = data;
      this.addMarker();
    });
    this.centerSubject.subscribe(data => this.map?.panTo(new L.LatLng(data[0], data[1])));
  }
}
