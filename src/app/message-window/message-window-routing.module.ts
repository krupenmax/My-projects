import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MessageWindowComponent } from "./message-window.component";

const routes: Routes = [

  { component: MessageWindowComponent, path: "" },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class MessageWindowRoutingModule { }
