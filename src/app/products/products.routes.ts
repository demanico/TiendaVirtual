import { Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { DetailsComponent } from './details/details.component';


export const routes: Routes = [
  { path:"", component: ProductsComponent},
  { path:":id", component: DetailsComponent},

];


export default routes;

