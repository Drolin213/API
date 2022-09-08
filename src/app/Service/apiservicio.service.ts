import { Injectable } from '@angular/core';
import { LoginI } from '..//modulo/loguin.interative';
import { ReponseI } from '..//modulo/reponse.interface'
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class APIservicioService {

  public url:string;

  constructor(private http:HttpClient) { 
    this.url = "https://api-salud-alejandro.herokuapp.com"
  }

  loginByEmail(form:LoginI):Observable<ReponseI>{
    let direccion = this.url +"/api/auth";
    return this.http.post<ReponseI>(direccion,from);

  }



}
