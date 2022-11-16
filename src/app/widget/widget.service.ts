import {Injectable} from "@angular/core";



@Injectable({
  providedIn: 'root'
})
export class WidgetService{
  url = "http://localhost:8080/";
  constructor() {
  }
  async getWidget(location: string) {

    const response = await fetch(this.url + "widget/" + location, {
      method: 'GET',
    })

    return await response.json() ;

  }

  async deleteWidget(id: string) {
    const response = await fetch(this.url + "grid/", {
      method: 'DELETE',
      body: JSON.stringify({
        id: id
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    //return await response.json() ;
  }
}
