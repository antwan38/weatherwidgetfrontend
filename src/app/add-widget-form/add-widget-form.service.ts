import {Injectable} from "@angular/core";

type widget ={
  column : string;
  row: string;
  location: string;
}

@Injectable({
  providedIn: 'root'
})
export class WidgetGridService{
  url = "http://localhost:8080/grid/";
  private user : any = {name: "", email: "", id: ""}
  constructor() {
  }

  async editWidget(data: widget, id: string){
    this.user = JSON.parse(sessionStorage.getItem("user") || "{}");
    const response = await fetch(this.url, {
      method: 'PUT',
      body: JSON.stringify({
        column : data.column,
        row : data.row,
        location : data.location,
        id: id,
        clientId : this.user.id

      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
    })
    //return await response.json() ;


  }

  async postWidget(data: widget){
    this.user = JSON.parse(sessionStorage.getItem("user") || "{}");
    const response = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify({
        column : data.column,
        row : data.row,
        location : data.location,
        clientId : this.user.id

      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
    })
    //return await response.json() ;


  }

}
