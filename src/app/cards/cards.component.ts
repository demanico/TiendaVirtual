import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Users } from '../interfaces/users.interface';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [FormsModule,CommonModule,CardsComponent,HomeComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

 @Input() list : Users[] = [];


constructor(){}


} 
