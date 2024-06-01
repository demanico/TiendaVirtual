import { Component, inject} from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsComponent,CommonModule,CarouselComponent,AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})




export class HomeComponent{

  private readonly productsSvc = inject(ProductsService)
  products$ = this.productsSvc.getAllProducts()


}
