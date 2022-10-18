import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MessageWindowRoutingModule } from "./message-window-routing.module";
import { MessageWindowComponent } from "./message-window.component";


@NgModule({
  bootstrap: [MessageWindowComponent],
  declarations: [MessageWindowComponent],
  imports: [CommonModule, MessageWindowRoutingModule],
  providers: [],
})
export class MessageWindowModule { }
