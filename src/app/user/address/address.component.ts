import { Component } from '@angular/core';
import { Address } from 'src/app/addressType';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  addressArray:Address[]=[
    {
      name:'Vishakh',
      mobile:'9061240699',
      pincode:673315,
      houseNo:'vishakhm house',
      area:'kodakallu',
      landmarak:'Near Pattuppurakuzhi temple',
      town:'atholi',
      dist:'calicut',
      state:'kerala',
      country:'india'
    },
    {
      name:'Vishakh',
      mobile:'9061240699',
      pincode:673315,
      houseNo:'vishakhm house',
      area:'kodakallu',
      landmarak:'Near Pattuppurakuzhi temple',
      town:'atholi',
      dist:'calicut',
      state:'kerala',
      country:'india'
    },
    {
      name:'Vishakh',
      mobile:'9061240699',
      pincode:673315,
      houseNo:'vishakhm house',
      area:'kodakallu',
      landmarak:'Near Pattuppurakuzhi temple',
      town:'atholi',
      dist:'calicut',
      state:'kerala',
      country:'india'
    },
    {
      name:'Vishakh',
      mobile:'9061240699',
      pincode:673315,
      houseNo:'vishakhm house',
      area:'kodakallu',
      landmarak:'Near Pattuppurakuzhi temple',
      town:'atholi',
      dist:'calicut',
      state:'kerala',
      country:'india'
    },
  ]
}
