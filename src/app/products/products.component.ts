import { DetailsComponent } from './details/details.component';
import { CommonModule, AsyncPipe } from '@angular/common';
import { Component, inject, OnInit, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardsComponent } from '../cards/cards.component';
import { ProductsService } from 'app/products.service';
import { product, Results} from 'app/interfaces/productos';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe,FormsModule,CommonModule,CardsComponent,DetailsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements  OnInit {
  private producSvc = inject(ProductsService);
  productos: product[] = [];
  searchData: string = '';
  filterData!: product[] | null;
  data!:product[];


ngOnInit(): void {
  this.getAllProducts();
}
  getAllProducts() {
    this.producSvc.getProductsList().subscribe((res: Results) => {
      this.productos = res.results;
    });

  }

  getFileteredPruducts(){
    this.filterData = this.productos.filter((product: product)=>{
     return product.nombre_producto.toLowerCase().includes(this.searchData.toLowerCase())


    })

  }

}



