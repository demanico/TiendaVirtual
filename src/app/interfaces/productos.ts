export interface Products{
  name:string,
  money?:ProductPrices,
  category: number,
  description?:string,
  price:number
}


export interface ProductPrices{
  cost:number,
  tax:number,
  price:number
}
