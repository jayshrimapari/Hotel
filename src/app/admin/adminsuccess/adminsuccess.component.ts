import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';



@Component({
  selector: 'app-adminsuccess',
  templateUrl: './adminsuccess.component.html',
  styleUrls: ['./adminsuccess.component.scss']
})
export class AdminsuccessComponent {
  apidata: any;
  flag = false;
  ShowHotelDetails: boolean=false;

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getHotelDetails()
  }

  getHotelDetails() {
    this.dataservice.getHotelCall().subscribe((data) => {
      this.apidata = data
      console.log(data);
    })

    this.flag = true
  }


  //deleteApi
 async deleteData(id: any) {
    await this.dataservice.deletHotelCall(id).toPromise()
console.log(this.apidata,'delete api');

    //to refresh hotel list
    this.getHotelDetails()

  }

//  async editData(id: any) {
//   this.dataservice.hotelDetailsId= id;
   
//     this.dataservice.hotelJourney='Edit'
//     this.dataservice.HotelByIdApiData = await this.dataservice.getHotelDetailById(id).toPromise()
    
//     this.router.navigateByUrl('/owner/ownerhotellist')

//   } 
  back(){
    this.router.navigateByUrl('/admin/adminlanding')
  }
  
  viewHotelList(){
    this.ShowHotelDetails=true;
  }
  ngOnDistroy(){
    this.dataservice.hotelJourney='';
  }
}




