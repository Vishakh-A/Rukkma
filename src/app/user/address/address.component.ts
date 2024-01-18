import { Component } from '@angular/core';
import { filter } from 'rxjs';
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
      name:'athul',
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
      name:'Nandu',
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
      name:'Vyshakh',
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


  onDelete(value:any){
    let option =confirm('Do you want to delete this address ?')
    if(option){
      let afterDelete= this.addressArray.filter(item=>item.name!=value.name)

      this.addressArray=afterDelete;
    }
    
  }
}
