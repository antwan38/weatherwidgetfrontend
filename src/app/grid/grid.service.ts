import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";



@Injectable({
  providedIn: 'root'
})
export class GridService{
  url = "http://localhost:8080/grid/";
  constructor(private http: HttpClient) {
  }
  getGrid(){
    return this.http.get((this.url));
  }
}
