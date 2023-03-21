import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ownerlanding',
  templateUrl: './ownerlanding.component.html',
  styleUrls: ['./ownerlanding.component.scss']
})
export class OwnerlandingComponent {
  constructor(private router:Router ,private dataservice:DataService){
  }
  OwnerSignIn(){
    this.router.navigateByUrl('/owner/ownersignin')
  
  }
  OwnerSignUp(){
    this.router.navigateByUrl('/owner/ownersignup')
  
  }
  OwnerSuccess(){
    this.router.navigateByUrl('/owner/ownersuccess')
  }
  back(){
    this.router.navigateByUrl('/home')
  }
   newRegistration(){
  //   this.dataservice.newRegistration = true;

  this.dataservice.hotelJourney ='New Registration'
     this.router.navigateByUrl('/owner/ownerhotellist');

  
  }
}


