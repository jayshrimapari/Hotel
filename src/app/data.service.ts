import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
 
  
  
  
  
  adminurl="http://localhost:3000/admin";
  ownerurl="http://localhost:3000/owner";
  userurl="http://localhost:3000/user";
  hotelurl="http://localhost:3000/hotelDetails";
  hotelbookingurl="http://localhost:3000/hotelbooking";
  newRegistration: boolean=false;
  HotelByIdApiData: any;
  postDataObj: any;
  postData: any;
  FormData:any
   hotelJourney!: string;
  hotelId: any;
  hotelDetailsId: any;
  hotelListByOwner: any;
  

  constructor(private httpclient:HttpClient) { }
  //getadmincall
  getAdminCall(){
    return this.httpclient.get(this.adminurl);
  }
  
 //postadmincall
  postAdminCall(adminurl:string,FormData:any){
    return this.httpclient.post(this.adminurl,FormData)
  }
  //postownercall
  postOwnerCall(ownerurl:string,FormData:any){
    return this.httpclient.post(this.ownerurl,FormData)
  
  }
  getOwnerCall(){
    return this.httpclient.get(this.ownerurl)
  }
  getUserCall(){
    return this.httpclient.get(this.userurl)
  }
  // postUserCall(userurl:string,FormData:any){
  //   return this.httpclient.post(this.userurl,FormData)
  // }
  postUserCall(data:any){
    return this.httpclient.post(this.userurl, data)
  }
  getHotelCall() {
    return this.httpclient.get(this.hotelurl)
  }
  deletHotelCall(id:any){
    return this.httpclient.delete(this.hotelurl + "/" + id)
  }
  putHotelCall(id:any,body:any){
    return this.httpclient.put(this.hotelurl + "/" + id, body)
  }
  getHotelDetailById(id:number){
    return this.httpclient.get(this.hotelurl +'/' +id)
   }
   postHotelBookingCall(data:any){
    return this.httpclient.post(this.hotelbookingurl ,data)
   }
   postHotelDetailsApiCall(data:any) {
    return this.httpclient.get(this.hotelurl)
  }
  patchHotelDetailsApiCall(hotelDetails: any):any {
    return this.httpclient.patch(this.hotelurl + "/" + this.hotelId , hotelDetails )
   }
  
  
   
  
}
