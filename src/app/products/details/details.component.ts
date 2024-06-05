import { CurrencyPipe } from '@angular/common';
import { Component, inject, input, OnInit, Signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { product } from 'app/interfaces/productos';
import { ProductsService } from 'app/products.service';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
ProductId  = input<number>(0,{alias: 'id'} );
product!: Signal<product | undefined>;
private readonly ProductsSvc = inject(ProductsService )
private readonly _sanitizer = inject(DomSanitizer);

ngOnInit(): void {
  this.product = this.ProductsSvc.getProductsById(this.ProductId());
}

starArray: number[] = new Array(5).fill(0);

genereteSvg(index:number):SafeHtml{
  let svgsContent = null;
  const rate = this.product()?.rating.rate as number;
  if(index + 1 <= Math.floor(rate)){
     svgsContent = `
     <style>
     .star {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 50px;
      clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
      background-color: #e0e0e0;
    }

    .star-fill {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background-color: #ffcc00;
      clip-path: inherit;
      overflow: hidden;
    }


     </style>

     <div class="star-container">
        <div class="star">
            <div class="star-fill" style="width: 50%;"></div> <!-- Ajusta el width según la valoración -->
        </div>
      </div>`;
  }else if(index < rate){
    svgsContent = `
    <style>
     .star {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 50px;
      clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
      background-color: #e0e0e0;
    }

    .star-fill {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background-color: #ffcc00;
      clip-path: inherit;
      overflow: hidden;
    }

    <div class="star-container">
    <div class="star">
        <div class="star-fill" style="width: 50%;"></div> <!-- Ajusta el width según la valoración -->
    </div>
</div>`;
  }else{
    svgsContent = `
    <style>
    .star {
     position: relative;
     display: inline-block;
     width: 50px;
     height: 50px;
     clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
     background-color: #e0e0e0;
   }

   .star-fill {
     position: absolute;
     top: 0;
     left: 0;
     height: 100%;
     background-color: #ffcc00;
     clip-path: inherit;
     overflow: hidden;
   }
    <div class="star-container">
    <div class="star">
        <div class="star-fill" style="width: 50%;"></div> <!-- Ajusta el width según la valoración -->
    </div>
</div>`;
  }
  return this._sanitizer.bypassSecurityTrustHtml(svgsContent);
}


}

