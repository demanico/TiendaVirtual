import { CommonModule } from '@angular/common';
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


 @Input({required: true}) product!:any;

 nextProducts(){
  const cards = document.getElementById('cards');
  cards?.scrollTo({
    left: cards.scrollLeft + cards.offsetWidth,
    behavior: 'smooth',
  });
 }

}
