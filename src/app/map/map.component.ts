import { Component, OnInit } from "@angular/core";
import * as L from "leaflet";

@Component({
  selector: "app-map",
  styleUrls: ["./map.component.scss"],
  templateUrl: "./map.component.html",
})

export class MapComponent implements OnInit {
  private map?: L.Map;
  private centroid: L.LatLngExpression = [54.012152, 27.679890];
  public constructor() { }

  private initMap(): void {
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

  public ngOnInit(): void {
    this.initMap();
  }


}
