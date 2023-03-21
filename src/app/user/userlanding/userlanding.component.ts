import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlanding',
  templateUrl: './userlanding.component.html',
  styleUrls: ['./userlanding.component.scss']
})
export class UserlandingComponent {
  constructor(private router:Router){
  }
  UserSignIn(){
    this.router.navigateByUrl('/user/usersignin')
  
  }
  UserSignUp(){
    this.router.navigateByUrl('/user/usersignup')
  
  }
  UserSuccess(){
    this.router.navigateByUrl('/user/userhotellist')
  }
  back(){
    this.router.navigateByUrl('/home')
  }

}
