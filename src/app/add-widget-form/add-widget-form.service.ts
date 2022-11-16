import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";

type widget ={
  column : number;
  row: number;
  location: string;
}

@Injectable({
  providedIn: 'root'
})
export class WidgetGridService{
  url = "http://localhost:8080/widget/";

  constructor() {
  }

  async postWidget(data : widget){


    const response = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify({
        column : data.column,
        row : data.row,
        location : data.location

      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
    })
    return await response.json() ;


  }

}
