
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { product } from 'app/interfaces/productos';
import { ProductsComponent } from 'app/products/products.component';



@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent{

  @Input() productosInfo!: product ;


  @Output() onAddToCardEvent = new EventEmitter<product>();

/*   onAddToCard():void{
    this.onAddToCardEvent.emit(this.product())

  } */

}
