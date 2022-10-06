import { AfterContentChecked, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit } from "@angular/core";
import * as L from "leaflet";
import { Subject } from "rxjs";
import { DataService } from "../data.service";
import { pet } from "../pet";

@Component({
  selector: "app-map",
  styleUrls: ["./map.component.scss"],
  templateUrl: "./map.component.html",
})

export class MapComponent implements OnInit{
  private map?: L.Map;
  private centroid: L.LatLngExpression = [54.012152, 27.679890];
  public petSubject: Subject<pet[]> = this.dataService.pets;
  public pets?: pet[];
  public constructor(private cdr: ChangeDetectorRef, private dataService: DataService) {
  }

  public initMap(): void {
    this.map = L.map("map", {
      center: this.centroid,
      zoom: 12,
    });

    const tiles = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap<a/>",
      maxZoom: 18,
      minZoom: 10,
    });
    tiles.addTo(this.map);
  }

  public a(): void {
    if (this.pets?.length != 0) {
      let img = this.pets?.[this.pets?.length - 1].image;
      const icon = L.icon({
        iconSize: [45, 63],
        iconUrl: "../../assets/" + img + ".png",
      });
      let marker = L.marker([54.0120607, 27.6808058], { icon: icon }).addTo(this.map as L.Map);
    }
  }

  public ngOnInit(): void {
    this.initMap();
    this.petSubject = this.dataService.pets;
    this.petSubject.subscribe(data => {
      this.pets = data;
      this.a();
    });
  }
}
