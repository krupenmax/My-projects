import { Component } from "@angular/core";
import { Form, FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-message-window",
  styleUrls: ["./message-window.component.scss"],
  templateUrl: "./message-window.component.html",
})
export class MessageWindowComponent {
  public messages: string[] = [];
  public myMessages: string[] = [];
  public friendMessages: string[] = [];
  public fb = new FormBuilder().nonNullable;
  public formGroup = this.fb.group({
    messageInput: new FormControl(),
  });
  public constructor() { }

  public addMessage(): void {
    if (this.formGroup.controls["messageInput"].value !== null && this.formGroup.controls["messageInput"].value !== "") {
      this.myMessages.unshift(this.formGroup.controls["messageInput"].value);
      this.messages.unshift(this.formGroup.controls["messageInput"].value);
      this.formGroup.controls["messageInput"].setValue("");
    }
  }

  public addText(): void {
    this.friendMessages.unshift("Hello world!");
    this.messages.unshift("Hello world!");
  }
}
