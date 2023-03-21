import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-hotellist',
  templateUrl: './hotellist.component.html',
  styleUrls: ['./hotellist.component.scss']
})
export class HotellistComponent {
  apidata:any;
  constructor(private router:Router,private dataservice:DataService){

  }
  ngOnInit():void{
    this.gethotelDetails()

  }
  // deleteData(id: any) {
  //   this.dataservice.deletHotelCall(id).subscribe((data) => {
  //     this.apidata=data
  //     console.log(data);
  //   })
  // }
  async gethotelDetails() {
  this.apidata= await this.dataservice.getHotelCall().toPromise()
  console.log(this.apidata);
  }
  deleteData(){
    
  }
  OwnerSuccess(){
    this.router.navigateByUrl('/admin/adminlanding')
  }

}



