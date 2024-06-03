import { Component, inject, input, OnInit, Signal } from '@angular/core';
import { product } from 'app/interfaces/productos';
import { ProductsService } from 'app/products.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{

  //@Input({alias: 'id' })Productid!: number;
ProductId  = input<number>(0,{alias: 'id'} );
product!: Signal<product | undefined>;
private readonly ProductsSvc = inject(ProductsService )

ngOnInit(): void {
  this.product = this.ProductsSvc.getProductsById(this.ProductId());
}

}
