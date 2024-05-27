import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  Namber:string = "Hellouda"
  Nav_0: string = "Home"
  Nav_1: string = "Productos"



 NavegarHome(){



 }
 NavegarProducts(){
  

 }





}
