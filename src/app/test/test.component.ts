import { Component, OnInit } from '@angular/core';
import {TestService} from "./test.service";
declare let google: any;
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

 tests: any;
 googleId: any = {id: 'no google id'};
 status: any = "";
 amount= 0;
  private FB: any;

  constructor(private test: TestService) {
    this.getTest();
    this.getClient();
    setTimeout(() =>{ this.createGoogle();}, 150);
  }

  ngOnInit(): void {

    //window['checkLoginStatus'] = this.checkLoginStatus.bind(this);
  }

  createGoogle(): void {
    console.log(this.googleId);
    google.accounts.id.initialize({
      client_id: this.googleId.id,
      callback: (response: any) => this.handleGoogleSignIn(response)
    });
    google.accounts.id.renderButton(
      document.getElementById("signInGoogle"),
      { size: "large", type: "icon", shape: "pill" }  // customization attributes
    );
  }

  handleGoogleSignIn(response: any) {
    console.log(response.credential);
    const base64Url = response.credential.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    console.log(JSON.parse(jsonPayload));

  }


  checkLoginStatus() {
    this.FB.checkLoginStatus((result: any) => {
      console.log(result);
    });
  }



  getTest(): void{
    this.test.getTest().subscribe(data=>{
      this.tests = data
      this.amount = this.tests.length;
    });
  }

  getClient(): void{
    this.test.getClientId().subscribe(data=>{
      this.googleId = data;


    });
  }
  uploadTest(test : string): void{
    this.status = this.test.postTest(test);
    setTimeout(() =>{ this.getTest();}, 200);

  }
}
