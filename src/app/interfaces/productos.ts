//api FAKE 
/* interface Rating{
  rate: number;
  count:number;
}

export interface product{
  id:number;
  title:string;
  price:number;
  description:string;
  images:string;
  category:string;
  rating:Rating;
  qty:number;
}
 */





export interface Results{
  status:number;
  total:number;
  results: product[];
}




export interface product{
id_producto:number;
nombre_producto:string;
descripcion_producto:string;
categoria_producto:number;
imagen_producto:string;
precio_producto:number;
estado_producto:number;
marca_producto:number;
fecha_creacion_producto: Date;

}

