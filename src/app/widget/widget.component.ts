import { Component, OnInit } from '@angular/core';
import {WidgetService} from "./widget.service";
import {NgForm} from "@angular/forms";
import * as Console from "console";

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  widgets: any = {name: 'Location', main:{temp: '96'}};
  temp ="90°C";//°F


  constructor(private widget: WidgetService) {

  }

  ngOnInit(): void {

  }



  getWidget(location: any): void{

    console.log(location.name);
    this.widget.getWidget(location.name).subscribe(data=>{
      this.widgets = data
      let tempt = this.widgets.main.temp;
      this.temp = (tempt -= 272.15).toFixed(2)+"°C";


      });




  }
}
