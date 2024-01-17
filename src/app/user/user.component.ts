import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  items =[
    {
      normalImg:'assets/order-normal.png',isHover:false,hoverImg:'assets/order-hover.gif',
      title:'My Orders',content:'Order Details',route:'../user/orders'
  },
    {
      normalImg:'assets/cart-normal.png',isHover:false,hoverImg:'assets/cart-hover.gif',
      title:'My Cart',content:' Wishlist',route:'../user/cart'
  },
    {
      normalImg:'assets/profile-normal.png',isHover:false,hoverImg:'assets/profile-hover.gif',
      title:'Profile',content:'Manage Profile ',route:'../user/profile'
  },
    {
      normalImg:'assets/location-normal.png',isHover:false,hoverImg:'assets/location-hover.gif',
      title:'Address',content:' Manage Address',route:'../user/address'
  },
    {
      normalImg:'assets/customer-normal.png',isHover:false,hoverImg:'assets/customer-hover.gif',
      title:'Customer Service',content:'Contact Us',route:'../about'
  },
  ]

onMouseEnter(item:any){
  item.isHover=true
}

onMouseLeave(item:any){
  item.isHover=false
}

}
