import {Injectable} from "@angular/core";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class SigninService {
  private url = "http://localhost:8081/auth/";
  private router: Router;
  constructor(router: Router) {
    this.router = router;
  }


  async facebookUrl(){
    const response = await fetch(this.url + "facebook/?" + new URLSearchParams({
      redirect_uri: "http://localhost:4200" + this.router.url.split('?')[0] ,
    }), {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
  })
    return response.json();
  }


  async getUserInfo( code : string){


    const response = await fetch(this.url + "facebook/code/?" + new URLSearchParams({
      code: code,
      redirect_uri: "http://localhost:4200" + this.router.url.split('?')[0] ,
      }), {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    return await response.json() ;


  }


}
