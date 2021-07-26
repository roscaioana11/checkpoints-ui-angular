import {Injectable} from '@angular/core';
import {Stomp} from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import {Subject} from "rxjs";
import {Student} from "./students.service";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private stompClient = null;
  connected = false;
  websocketEvents: Subject<Student> = new Subject<Student>();

  constructor() {
  }

  connect() {
    const socket = new SockJS('http://localhost:8080/websocket');
    // @ts-ignore
    this.stompClient = Stomp.over(socket);
    const _this = this;
    // @ts-ignore
    this.stompClient.connect({}, function (frame) {
      _this.setConnected(true);
      console.log('Connected: ' + frame);

      // @ts-ignore
      _this.stompClient.subscribe('student', hello => {
        _this.websocketEvents.next(JSON.parse(hello.body));
        console.log("hello " + JSON.stringify(JSON.parse(hello.body)));
      });
    });
  }

  disconnect() {
    if (this.stompClient != null) {
      // @ts-ignore
      this.stompClient.disconnect();
    }

    this.setConnected(false);
    console.log('Disconnected!');
  }

  sendName() {
    // @ts-ignore
    this.stompClient.send(
      '/gkz/hello',
      {},
      JSON.stringify({'name': "hello"})
    );
  }

  setConnected(connected: boolean) {
    this.connected = !connected;
  }

  subscribe(observer: (value: Student) => void) {
    this.websocketEvents.subscribe(observer);
  }
}
