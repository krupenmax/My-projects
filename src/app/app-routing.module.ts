import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";

const routes: Routes = [

  { loadChildren: () => import("./app-map/app-map.module").then(m => m.AppMapModule), path: "zoo-map" },
  { loadChildren: () => import("./menu/menu.module").then(m => m.MenuModule), path: "" },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
