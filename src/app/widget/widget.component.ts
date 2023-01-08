import {Component, Input, OnInit} from '@angular/core';
import {WidgetService} from "./widget.service";
import {Router} from "@angular/router";
import {GridComponent} from "../grid/grid.component";
import {WebsocketService} from "../websocket/websocket.service";

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  @Input()
  wLocation: string = "";
  @Input()
  wId: string="";
  socketService : WebsocketService;
  socket : WebSocket | undefined;

  widgets: any = {name: 'Location', main:{temp: '96'}};
  temp ="90°C";//°F
  test = "";


  constructor(private widget: WidgetService, private router: Router, private grid : GridComponent, private webSocket : WebsocketService) {
    this.socketService = webSocket;
  }



  ngOnInit(): void {
    this.getWidget(this.wLocation);
    this.socket = this.socketService.getSocket();
    this.socket.addEventListener('message', (event) => {
      if(this.wLocation === JSON.parse(event.data).location){
        this.updateWidget(JSON.parse(event.data));
      }
    });
  }

  deleteWidget(id : string){
    this.widget.deleteWidget(id).then((data) =>{
      this.grid.ngOnInit();
    });
  }

  editWidget(){
    this.router.navigate(["/addWidgetForm", this.wId]);

  }

  getWidget(location: string): void{
   this.widget.getWidget(location).then((data) =>{
    this.widgets = data;
    this.temp = (this.widgets.main.temp -= 272.15).toFixed(2)+"°C";
   })
  }

  updateWidget(data : any){
    this.widgets.name = data.location;
    this.temp = (data.temp -= 272.15).toFixed(2)+"°C";
    console.log("update widget ", this.widgets);
  }

}
