import { CommonModule } from '@angular/common';
import { Component, inject, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardsComponent } from '../cards/cards.component';
import { ProductsService } from 'app/products.service';
import { product } from 'app/interfaces/productos';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule,CommonModule,CardsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  private readonly productSvc = inject(ProductsService);
  products =  this.productSvc.products;

  filterData!: product[] | null;
  searchData:string ='';
  
}



