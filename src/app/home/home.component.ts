import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Products} from '../interfaces/productos'
import { UsersService } from '../users.service';
import { Users } from '../interfaces/users.interface';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  

   export class homeComponent implements OnInit{
    data: any;
    constructor (private _user: UsersService){

    }
   }


  ngOnInit(): void {
    this.getAllUsers();

  };


   constructor(private _users: UsersService){ }

   getAllUsers(){
    this._users-getUsers().subscribe({next:(res)=>{
      console.log(res);
      this.data = res
    }})


   }
}
