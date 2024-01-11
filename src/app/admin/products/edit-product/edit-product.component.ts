import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      console.log(param['id']);
      
    })
    
  }
}
