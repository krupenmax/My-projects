import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppMapRoutingModule } from "./app-map-routing";
import { MainComponent } from "./app-map.component";
import { ListComponent } from "./list/list.component";
import { MapComponent } from "./map/map.component";
import { PopUpAddComponent } from "./pop-up-add/pop-up-add.component";

@NgModule({
  bootstrap: [MainComponent],
  declarations: [MainComponent, MapComponent, ListComponent, PopUpAddComponent],
  imports: [CommonModule, ReactiveFormsModule, AppMapRoutingModule],
  providers: [],
})
export class AppMapModule { }
