import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-userhotellist',
  templateUrl: './userhotellist.component.html',
  styleUrls: ['./userhotellist.component.scss']
})
export class UserhotellistComponent {
  apidata: any;
  flag = false;
  searchText:string="";

  constructor(private dataservice:DataService) { }

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


}


