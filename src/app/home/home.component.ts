import { Component, inject} from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CarouselComponent,AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})




export class HomeComponent{

}
