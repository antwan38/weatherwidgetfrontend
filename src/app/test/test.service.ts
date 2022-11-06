import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import * as http from "http";


@Injectable({
  providedIn: 'root'
})
export class TestService{
  url = "http://localhost:8080/test/";
  constructor(private http: HttpClient) {
  }
  getTest(){
    return this.http.get((this.url + "get/"));
  }

  getClientId(){

    return this.http.get(("http://localhost:8081/client/"));
  }

  postTest(name : string){
    console.log(name);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(name)

    }

    return fetch(this.url + "post/", options).then(x => x.text());

  }
}
