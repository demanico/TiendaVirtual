import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { CardsComponent } from '../cards/cards.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})




export class HomeComponent implements OnInit {
    data: any;
    constructor (private _users: UsersService){

    }



  ngOnInit(): void {
    this.getAllUsers();}

   getAllUsers(){
    this._users.getUsers().subscribe({next:(res: any)=>{
      console.log(res);
      this.data = res
    }})


   }
}
