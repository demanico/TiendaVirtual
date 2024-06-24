import { CurrencyPipe } from '@angular/common';
import { Component, inject, Input, input, OnInit, Signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product,Results } from 'app/interfaces/productos';
import { ProductsService } from 'app/products.service';
import { __param } from 'tslib';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
@Input({alias: 'id' }) productId!: number;
productDetail:product | undefined
private _route = inject(ActivatedRoute)
private _productoService = inject(ProductsService)

ngOnInit(): void {
  this._route.params.subscribe(params =>{
    this._productoService.getProductoById(params['id']).subscribe((data: Results)=>{
      this.productDetail = data.results[0];

    })
  })
}


}


