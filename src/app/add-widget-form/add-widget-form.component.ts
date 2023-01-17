import {Component, Inject, OnInit} from '@angular/core';
import {WidgetService} from "../widget/widget.service";
import {WidgetGridService} from "./add-widget-form.service";
import {ActivatedRoute, Router} from "@angular/router";
import {GridService} from "../grid/grid.service";

type widget ={
  column : string;
  row: string;
  location: string;
}

@Component({
  selector: 'app-add-widget-form',
  templateUrl: './add-widget-form.component.html',
  styleUrls: ['./add-widget-form.component.css']
})
export class AddWidgetFormComponent implements OnInit {
  private id : string | null = "";
  public formData : any = {location: "", wColumn: null, wRow: null}
  public userIsSignedIn : boolean = false;
  @Inject('ActivatedRoute') private route: ActivatedRoute
  constructor(private grid: GridService, private widgetService : WidgetService, private widget: WidgetGridService, route: ActivatedRoute, private router: Router) {
    this.route = route;
  }

  ngOnInit(): void {
    if(sessionStorage.getItem("user") !== null && sessionStorage.getItem("user") !== undefined) {
      this.userIsSignedIn = true;
      this.id = this.route.snapshot.paramMap.get('id');
      if (this.id !==  null) {
        this.grid.getGridItem(this.id).then(data => {
          this.formData = data;
        });
      }
    }else {
      this.userIsSignedIn = false;
    }
  }

  getGrid() :void{

  }

  postGrid(rawData : widget) :void{
    try {
      this.widgetService.getWidget(rawData.location).then((data) => {
        let widgetData : widget = rawData;
        widgetData.location = data.name;
        if (this.id === null) {
          this.widget.postWidget(widgetData).then((data) => {
            this.router.navigate(["/home"]);
          });
        } else {
          if (data.location === "" || data.location === null) {
            data.location = this.formData.location;
          }
          if (data.row === "" || data.row === null) {
            data.row = this.formData.wRow;
          }
          if (data.column === "" || data.column === null) {
            data.column = this.formData.wColumn;
          }
          this.widget.editWidget(widgetData, this.id).then((data) => {
            this.router.navigate(["/home"]);
          });
        }
      });
    }catch (e){
      console.log(e)
    }

  }

}
