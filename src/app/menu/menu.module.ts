import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppMapRoutingModule } from "../app-map/app-map-routing";
import { AppRoutingModule } from "../app-routing.module";
import { MenuRoutingModule } from "./menu-routing.module";
import { MenuComponent } from "./menu.component";


@NgModule({
  bootstrap: [MenuComponent],
  declarations: [MenuComponent],
  imports: [CommonModule, MenuRoutingModule],
  providers: [],
})
export class MenuModule { }
