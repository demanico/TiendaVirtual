import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient ) { }

  getUsers(){
  return  this._http.get("https://api.escuelajs.co/api/v1/users")
  }

  
}
