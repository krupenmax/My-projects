import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ListComponent } from "./list/list.component";
import { MapComponent } from "./map/map.component";
import { PopUpAddComponent } from "./pop-up-add/pop-up-add.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, ListComponent, MapComponent, PopUpAddComponent],
  imports: [BrowserModule],
  providers: [],
})
export class AppModule { }
