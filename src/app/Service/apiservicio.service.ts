import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class APIservicioService {

  public url:string;

  constructor(private http:HttpClient) { 
    this.url = "https://reqres.in/api/"
  }

  getPosts(): Observable<any>{
    // me debuelver listado de post desde wp-rest-api
    return this.http.get(this.url+"users/2");
  }
  
  getP(): Observable<any>{
    // me debuelver listado de post desde wp-rest-api
    return this.http.get(this.url+"users/2");
  }


}
