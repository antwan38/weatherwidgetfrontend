import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";



@Injectable({
  providedIn: 'root'
})
export class GridService{
  url = "http://localhost:8080/grid/";
  constructor(private http: HttpClient) {
  }
  async getGrid() {
    const response = await fetch(this.url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    return response.json();
  }

  async getGridItem(id: string | null) {
    const response = await fetch(this.url + "info/?" + new URLSearchParams({
      id: "" + id,
    }), {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    return response.json();
  }
}
