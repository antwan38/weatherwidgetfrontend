import {Component, Input, OnInit} from '@angular/core';
import {WidgetService} from "./widget.service";
import {NgForm} from "@angular/forms";
import * as Console from "console";
import {Router} from "@angular/router";
import {GridService} from "../grid/grid.service";
import {GridComponent} from "../grid/grid.component";
import {AddWidgetFormComponent} from "../add-widget-form/add-widget-form.component";

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

  widgets: any = {name: 'Location', main:{temp: '96'}};
  temp ="90°C";//°F


  constructor(private widget: WidgetService, private router: Router, private grid : GridComponent) {

  }

  ngOnInit(): void {
    this.getWidget(this.wLocation);
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
    let tempt = this.widgets.main.temp;
    this.temp = (tempt -= 272.15).toFixed(2)+"°C";
   })
  }





}
