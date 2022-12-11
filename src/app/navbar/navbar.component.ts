import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private route: Router;
  private data: any = "";
  constructor(route: Router) {
    this.route = route;
  }
  public IsHomeActive: boolean = false;
  public IsSignInActive: boolean = false;
  public IsAddWidgetActive: boolean = false;

  ngOnInit(): void {
  }
  clickEvent(id: string){
    if(id === "1"){
      this.data = document.getElementById("1");
      this.data.className = "active";
      this.data = document.getElementById("2");
      this.data.className = "";
      this.data = document.getElementById("3");
      this.data.className = "";
    } else if (id === "2"){
      this.data = document.getElementById("2");
      this.data.className = "active";
      this.data = document.getElementById("1");
      this.data.className = "";
      this.data = document.getElementById("3");
      this.data.className = "";
    } else if (id === "3"){
      this.data = document.getElementById("3");
      this.data.className = "active";
      this.data = document.getElementById("1");
      this.data.className = "";
      this.data = document.getElementById("2");
      this.data.className = "";
    }
    console.log(id);
  }
}
