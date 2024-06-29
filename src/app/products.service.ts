import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@envs/environment';
import {  Observable } from 'rxjs';
import {  Results} from './interfaces/productos';

@Injectable({
  providedIn: 'root'
})


export class ProductsService {

  private readonly _endPoint = environment.apiURL;
  private _http = inject(HttpClient) ;


    getProductsList():Observable<Results> {
      return this._http.get<Results>(this._endPoint)
     }

     getProductoById(id: number): Observable<Results>{
      return this._http.get<Results>(`${this._endPoint}?linkTo=id_producto&equalTo=${id}`);
    }

      getProductByName(name: string): Observable<Results>{
      return this._http.get<Results>(`${this._endPoint}?linkTo=nombre_producto&equalTo=${name}`)
   }

//Api FakeApi
 /*    getProductsById(id: number){
      return  runInInjectionContext(this._injector,()=>
      toSignal<product>(this._http.get<product>(`${this._endPoint}/${id}`) ))

    } */

    /* getFilterName(name:string){
      return runInInjectionContext(this._injector,()=>
        toSignal<product>(this._http.get<product>(`${this._endPoint}/?title = ${name}`) ))
    }
 */


}
