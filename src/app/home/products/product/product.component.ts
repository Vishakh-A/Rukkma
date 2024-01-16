import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productForm: FormGroup ;
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
  priceArray:{price:number,qty:number}[];
  price:number
  qtyArray:number[] =Array.from({length:10},(_,i)=>
    i+1
  )
  constructor(private fb: FormBuilder)
  {

  }
  ngOnInit(): void {
    this.productForm= this.fb.group({
      selectedOption :[this.product.priceArray[0].qty ,Validators.required],
      selectedCount :[null,Validators.required]
      
    });
    
    this.priceArray=this.product.priceArray;
    this.price=this.priceArray[0].price
      
      
    this.productForm.get('selectedOption')?.valueChanges.subscribe(value=>{
      this.onChange(value);
    })
  }
  onChange(value:any){
    const [values]=this.priceArray.filter(item=>item.qty==value)
    console.log(values);
    this.price=values.price;
  }
  onSubmit(){

  }
}
