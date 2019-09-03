import { Component, OnInit } from "@angular/core";
import { ChatService } from "../chat.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [ChatService]
})
export class LoginComponent {
  user: String;
  room: String;
  messageText: String;
  messageArray: Array<{ user: String; message: String }> = [];
  constructor(
    private _chatService: ChatService,
    private toastr: ToastrService
  ) {
    this._chatService
      .newUserJoined()
      .subscribe(data => this.messageArray.push(data));

    this._chatService
      .userLeftRoom()
      .subscribe(data => this.messageArray.push(data));

    this._chatService
      .newMessageReceived()
      .subscribe(data => this.messageArray.push(data));
  }

  join() {
    this._chatService.joinRoom({ user: this.user, room: this.room });
    this.toastr.success(`${this.user}, Welcome to ${this.room} room`, "", {
      progressBar: true,
      progressAnimation: "decreasing"
    });
  }

  leave() {
    this._chatService.leaveRoom({ user: this.user, room: this.room });
    this.toastr.warning(
      `${this.user}, You have signed out from ${this.room} room`,
      "",
      {
        progressBar: true,
        progressAnimation: "decreasing"
      }
    );
  }

  sendMessage() {
    this._chatService.sendMessage({
      user: this.user,
      room: this.room,
      message: this.messageText
    });
    this.messageText = null;
  }
}
