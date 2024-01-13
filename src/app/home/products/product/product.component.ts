import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  selectqty:string ='100ml';
  product={
    name:'Danthapala',
    description:'asdfasfasdfhsfbasjhvasfbasdf',
    priceArray:[
      {price:250,
        qty:100
      },{
        price:450,
        qty:200
      },{
        price:999,
        qty:500
      }
    ]
  }
  

  qtyArray:number[] =Array.from({length:10},(_,i)=>
    i+1
  )
}
