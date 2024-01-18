import { Component } from '@angular/core';

@Component({
  selector: 'app-User-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class UserProfileComponent {

  normalUrl='/assets/edit.png';
  hoverUrl='/assets/edit.gif'

    profileArray=[
      {title:'Name',value:'Vishakh A', isHover:false,isEdit:false},
      {title:'Mobile',value:'9061240699', isHover:false,isEdit:false},
      {title:'Email',value:'vishakhaarayalil@gmail.com', isHover:false,isEdit:false},
      {title:'Password',value:'********', isHover:false,isEdit:false},
    ]

    onMouseEnter(item:any){
      item.isHover=true
    }
    onMouseLeave(item:any){
      item.isHover=false
    }
    onEdit(item:any){
      item.isEdit=true;
    }
    onSave(item:any){
      item.isEdit=false;
    }
}
