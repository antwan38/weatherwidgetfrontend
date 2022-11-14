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

  constructor(private http: HttpClient) {
  }
  postWidget(data : widget){
    let params = new HttpParams();
    params = params.append('column', data.column);
    params = params.append('row', data.row);
    params = params.append('location', data.location);
    this.http.post(this.url , "",{params: params});
  }
}
