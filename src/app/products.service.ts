
import { HttpClient } from '@angular/common/http';
import {EnvironmentInjector, inject, Injectable, runInInjectionContext, signal } from '@angular/core';
import { environment } from '@envs/environment';
import {  tap } from 'rxjs';
import { product } from './interfaces/productos';
import {toSignal} from '@angular/core/rxjs-interop';
@Injectable({
  providedIn: 'root'
})


export class ProductsService {

public products  = signal<product[]>([]);
private readonly _http = inject(HttpClient);
private readonly _endPoint = environment.apiURL;
private readonly _injector = inject(EnvironmentInjector);

constructor(){
  this.getProducts();
}
    getProducts(): void {
       this._http
       .get<product[]>(`${this._endPoint}/?sort=desc`)
       .pipe(tap((data:product[]) => this.products.set(data)))
       .subscribe()

     }
    getProductsById(id: number){
      return  runInInjectionContext(this._injector,()=>
      toSignal<product>(this._http.get<product>(`${this._endPoint}/${id}`) ))

    }
    



}

