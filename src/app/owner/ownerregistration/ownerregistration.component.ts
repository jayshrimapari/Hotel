import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ownerregistration',
  templateUrl: './ownerregistration.component.html',
  styleUrls: ['./ownerregistration.component.scss']
})
export class OwnerregistrationComponent {
  regitrationForm!: FormGroup;
  dataId: any;
  editData: any;
  editIdArray:any=[];
  newRegistration: any;
  hotelJourney!: string;


  constructor(private fb: FormBuilder, private dataservice: DataService,private router:Router) { }
  

  ngOnInit(): void {
    
    this.hotelJourney=this.dataservice.hotelJourney
    console.log('data...', this.editData);
    
    if(this.hotelJourney == 'New Registration'){
      this.editData = {} ;
    }else{
        this.editData=this.dataservice.HotelByIdApiData;
    }
    console.log(this.editData,'this.editData');
    this.formValidation()

  }
  
  formValidation() {
    this.regitrationForm = this.fb.group({
      
      userName: [this.editData ? this.editData.userName : '', [Validators.required, Validators.maxLength(40)]],
      hotelName: [this.editData ? this.editData.hotelName : '', [Validators.required,]],
      hotelAddress: [this.editData ? this.editData.hotelAddress : '', [Validators.required,]],
      hotelMobile: [this.editData ? this.editData.hotelMobile : '', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]{10}')]],
      hotelMenu: [this.editData ? this.editData.hotelMenu : '', [Validators.required]],
      roomAvailable: [this.editData ? this.editData.roomAvailable : '', Validators.required],
      owenrCheck: [this.editData ? this.editData.owenrCheck : '', [Validators.requiredTrue]],
      userPass: [this.editData ? this.editData.userPass : '', [Validators.required, Validators.maxLength(8)]],
    });
   

  }


submit() {
  //post api call
// if (this.newRegistration) {
 if(this.hotelJourney == 'New Registration'){
   this.dataservice.postHotelDetailsApiCall(this.regitrationForm.value).subscribe((res) => {
     console.log(res);
   })
 }
 else {
   //patch pi call
   this.dataservice.patchHotelDetailsApiCall(this.regitrationForm.value).subscribe((res: any) => {
     console.log(res);
   })
 }
 this.router.navigateByUrl('/owner/ownersuccess')
}
OwnerSuccess(){
  this.router.navigateByUrl('/owner/ownerlanding')
}


}






