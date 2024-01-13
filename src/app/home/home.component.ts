import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  



  userLogin=true;
  drop=false;
  userImg="https://media.istockphoto.com/id/178600303/photo/flamy-symbol.jpg?s=612x612&w=0&k=20&c=vg7tu6EMWcubtJ6BxeR8xsAqNzk60spxF1owdho2bqg="

  constructor(private router:Router){

  }

  logout(){
    this.userLogin=false;
    this.router.navigate(['/']);

  }
}
