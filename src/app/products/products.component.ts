import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from '../products.service';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet,CommonModule,CardsComponent,AsyncPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent { 



  private readonly productsSvc = inject(ProductsService)
  products$ = this.productsSvc.getAllProducts()
}
