import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  getUsers(){
  return  this._http.get("https://api.escuelajs.co/api/v1/users")
  }
  constructor(private _http: HttpClient ) { }



}
