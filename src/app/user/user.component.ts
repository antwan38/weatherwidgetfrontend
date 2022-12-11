import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
public user : any = {name: "", email: "", id: ""}
  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("user") || "{}");
  }

}
