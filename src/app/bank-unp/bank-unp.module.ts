import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BankUnpRoutingModule } from "./bank-unp-routing.module";
import { BankUnpComponent } from "./bank-unp.component";
import { HttpService } from "./http.service";


@NgModule({
  bootstrap: [BankUnpComponent],
  declarations: [BankUnpComponent],
  imports: [CommonModule, BankUnpRoutingModule, HttpClientModule],
  providers: [HttpService],
})
export class BankUnpModule { }
