import { Component, OnInit } from '@angular/core';
import {WidgetService} from "../widget/widget.service";
import {WidgetGridService} from "./add-widget-form.service";

type widget ={
  column : number;
  row: number;
  location: string;
}

@Component({
  selector: 'app-add-widget-form',
  templateUrl: './add-widget-form.component.html',
  styleUrls: ['./add-widget-form.component.css']
})
export class AddWidgetFormComponent implements OnInit {

  constructor(private widget: WidgetGridService) { }

  ngOnInit(): void {
  }
  getGrid() :void{

  }

  postGrid(data : widget) :void{
    this.widget.postWidget(data)
  }

}
