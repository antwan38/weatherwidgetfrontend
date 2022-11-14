import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";



@Injectable({
  providedIn: 'root'
})
export class WidgetService{
  url = "http://localhost:8080/widget/";
  constructor(private http: HttpClient) {
  }
  getWidget(location: string){
    return this.http.get((this.url+ location) );
  }
}
