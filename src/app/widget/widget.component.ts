import {Component, Input, OnInit} from '@angular/core';
import {WidgetService} from "./widget.service";
import {NgForm} from "@angular/forms";
import * as Console from "console";
import {Router} from "@angular/router";
import {GridService} from "../grid/grid.service";
import {GridComponent} from "../grid/grid.component";

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  @Input()
  location: string = "";
  @Input()
  wId: string="";

  widgets: any = {name: 'Location', main:{temp: '96'}};
  temp ="90°C";//°F


  constructor(private widget: WidgetService, private router: Router, private grid : GridComponent) {

  }

  ngOnInit(): void {
    this.getWidget(this.location);
  }

  deleteWidget(id : string){
    this.widget.deleteWidget(id).then((data) =>{
    });
    this.grid.ngOnInit();
  }

  getWidget(location: string): void{
   this.widget.getWidget(location).then((data) =>{
    this.widgets = data;
    let tempt = this.widgets.main.temp;
    this.temp = (tempt -= 272.15).toFixed(2)+"°C";
   })
  }





}
