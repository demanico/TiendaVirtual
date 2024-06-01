import { CommonModule } from '@angular/common';
import { Component,Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent{

 @Input({required: true}) product!:any; 



}
