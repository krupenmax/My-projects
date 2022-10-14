import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BankUnpComponent } from "./bank-unp.component";

const routes: Routes = [

  { component: BankUnpComponent, path: "" },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class BankUnpRoutingModule { }
