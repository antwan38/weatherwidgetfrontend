import { Component, OnInit } from '@angular/core';
import {WidgetService} from "../widget/widget.service";
import {WidgetGridService} from "./add-widget-form.service";
import {Router} from "@angular/router";

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

  constructor(private widget: WidgetGridService, private router: Router) { }

  ngOnInit(): void {
  }
  getGrid() :void{

  }

  postGrid(data : widget) :void{
    try {
      this.widget.postWidget(data);
      this.router.navigate(["/home"]);
    }catch (e){
      console.log(e)
    }

  }

}
