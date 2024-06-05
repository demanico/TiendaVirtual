import { CommonModule, NgFor } from '@angular/common';
import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
 img:string = '';


NexProduct(){
  for(let i = 0 ; i <= 3; i++){
     this.img = this.imgArray[3]

  }
}







imgArray =[
   'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
   'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
   'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
  'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'
]


}

