import { Component, OnInit } from '@angular/core';
import {GridService} from "./grid.service";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  public grids : any = {wRow: 0, wColumn: 0 , location: "tilburg", id: 0}
  constructor(private service : GridService) { }

  ngOnInit(): void {

    this.service.getGrid().then(data =>{
      this.grids = data;
    });

  }

}
