import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "http://localhost:8080/user/";
  constructor() { }

  async postUserInfo( user : any) {
    const response = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify({
        name: user.name,
        email: user.email,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    return await response.json() ;
  }

  async getUserInfo( id : string) {
    const response = await fetch(this.url +"?" + new URLSearchParams({
      id: "" + id,
    }), {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    return await response.json() ;
  }
}
