import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from '../../environments/environment';
import { catchError, tap, switchAll } from 'rxjs/operators'
import {Injectable, OnInit} from "@angular/core";
import * as Console from "console";
import {WidgetComponent} from "../widget/widget.component";
import {Observable} from "rxjs";
const protocol = window.location.protocol.replace('http', 'ws');
const host = "localhost:8084";
const socket = new WebSocket(`${protocol}//${host}/websocket`);
socket.addEventListener('open', (event) => {
  console.log("connected");
});
socket.addEventListener('message', (event) => {
  console.log('Message from server ', event.data);
  let data = JSON.parse(event.data);
  sessionStorage.setItem(data.location, data.temp);
});
socket.addEventListener('close', (event) => {
  console.log('Connection closed');
});
socket.addEventListener('error', (event) => {
  console.log('Error ', event);
});
@Injectable({
  providedIn: 'root'
})
export class WebsocketService implements OnInit {

  private socket: WebSocket | undefined;
  ngOnInit(): void {
    socket.addEventListener('message', (event) => {
      console.log('local dil ', event.data);
      let data = JSON.parse(event.data);
      sessionStorage.setItem(data.location, data.temp);
    });
  }

  public getSocket(): WebSocket {
    return socket;
  }

  public sentMessage(message: string) {
    socket.send(message);
  }


}
