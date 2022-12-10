import { Component, OnInit } from '@angular/core';
import {SigninService} from "./signin.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public facebookUrl: any = {url: ""}
  private route: ActivatedRoute;
  private params: any = {code: "", state: ""};
  private signinService: SigninService;

  constructor(signinService: SigninService, route: ActivatedRoute) {
    this.signinService = signinService;
    this.route = route;
    this.signinService.facebookUrl().then(data => {
      this.facebookUrl = data;
    });
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
          this.params = params;
          if(this.params.code !== "" && this.params.code !== null && this.params.code !== undefined){
            this.signinService.getUserInfo(this.params.code).then(data => {
              console.log(data);
            });
          }
        }
      );
  }
}
