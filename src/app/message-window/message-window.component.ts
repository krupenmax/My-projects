import { Component } from "@angular/core";

@Component({
  selector: "app-message-window",
  styleUrls: ["./message-window.component.scss"],
  templateUrl: "./message-window.component.html",
})
export class MessageWindowComponent {
  public messages: string [] = [];
  public constructor() { }

  public addMessage(): void {
    this.messages.push(`This message was added at ${this.messages.length + 1} place`);
  }

}
