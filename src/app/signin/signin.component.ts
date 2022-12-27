import { Component, OnInit } from '@angular/core';
import {SigninService} from "./signin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../user/user.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public facebookUrl: any = {url: ""}
  private activatedRoute: ActivatedRoute;
  private params: any = {code: "", state: ""};
  private signinService: SigninService;
  private userSerivce: UserService;
  public signedIn : boolean = false;

  constructor(signinService: SigninService, route: ActivatedRoute, userSerivce: UserService) {
    this.signinService = signinService;
    this.userSerivce = userSerivce;
    this.activatedRoute = route;
    this.signinService.facebookUrl().then(data => {
      this.facebookUrl = data;
    });
  }

  ngOnInit(): void {
    if("69" === this.activatedRoute.snapshot.paramMap.get('code')&& (sessionStorage.getItem("user") === null || sessionStorage.getItem("user") === undefined)){
      this.userSerivce.getUserInfo("110").then(data => {
        sessionStorage.setItem("user", JSON.stringify(data));
        this.ngOnInit();
      });
    }
    if(sessionStorage.getItem("user") !== null && sessionStorage.getItem("user") !== undefined){
      this.signedIn = true;
    }else {
    this.activatedRoute.queryParams
      .subscribe(params => {
          this.params = params;
          if(this.params.code !== "" && this.params.code !== null && this.params.code !== undefined){
            this.signinService.getUserInfo(this.params.code).then(data => {
              this.userSerivce.postUserInfo(data).then(data => {
                sessionStorage.setItem("user", JSON.stringify(data));
                this.ngOnInit();
              });
            });
          }
        }
      );
    }
  }

  signOut(){
    sessionStorage.clear();
    this.signedIn = false;
  }
}
