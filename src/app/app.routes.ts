import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './products/details/details.component';


export const routes: Routes = [
  { path:"", component: HomeComponent},
  { path:"products", loadChildren:() => import("./products/products.routes")}, 
  { path:"**", redirectTo: ""}];


