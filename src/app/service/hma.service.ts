import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HmaService {

  // headers = new HttpHeaders;
  value:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjVmNGYxMzIxZWNmYzY0MTQ2Yjc5OGYiLCJkYXRlIjoiMjAyMS0wNS0wNFQwNzo1NDowNy43NTZaIiwiaWF0IjoxNjIwMTE0ODQ3fQ.7bH4ltgLBNmlKPbJ-WWwhbnaqHcAIPr6SDUlhY965D0";

  constructor(
    private _http : HttpClient
  ) { }

  generateHead(){
    let token = localStorage.getItem("token");
    let head = new HttpHeaders().set('Authorization' , this.value);
    head.append('Access-Control-Allow-Origin', 'http://localhost:4200')
    head.append('Access-Control-Allow-Credentials', 'true')
    return head;
  }

  addUser( obj:any ){
    return this._http.post<any>("https://hmaapi.kilobytetech.com/auth/login",obj)
  }

  getUser(){
    return this._http.get<any>("http://hmaapi.kilobytetech.com/users?pageNo=1&size=20", { headers : this.generateHead()});
  }
  DetailAPI( id:any ){
    return this._http.post<any>("http://hmaapi.kilobytetech.com/documents",id)
  }
}