import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminlanding',
  templateUrl: './adminlanding.component.html',
  styleUrls: ['./adminlanding.component.scss']
})
export class AdminlandingComponent {
  hotelObjData: any;
  showReq: any;
  dataservice: any;
  hotelData:any
  //dataservice: any;
  constructor(private router:Router){
  }
  AdminSignIn(){
    this.router.navigateByUrl('/admin/adminsignin')
  
  }
  AdminSignUp(){
    this.router.navigateByUrl('/admin/adminsignup')
  
  }
  AdminSuccess(){
    this.router.navigateByUrl('/admin/hotellist')
  }
  back(){
    this.router.navigateByUrl('/home')
  }
    //console.log('hotel data',this.hotelData);
    
//     if (this.hotelObjData) {
//       this.showReq = true
//     }
//     else {
//       alert('no request available')
//     }
//   }
  
//   acceptRequest() {
//     //post hotel data

//     // for (var i = 0; i < this.hotelData.length; ++i){
//     //     this.obj[i] = this.hotelData[i];
//     // }
//     this.dataservice.postHotelCall( this.hotelObjData ).subscribe((res) => {
//       console.log(res);
//     })
//     this.showReq= false;
//   }
//   rejectRequest() {
//     this.showReq= false;


  
 }



