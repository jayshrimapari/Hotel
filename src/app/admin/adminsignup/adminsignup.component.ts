import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.scss']
})
export class AdminsignupComponent {
  FormData: any;
  form:any
  res:any
  signUpForm!: FormGroup;
  postApiCall: any;
  //url="http://localhost:3000/admin";
  constructor(public formBuilder:FormBuilder,private dataservice:DataService,private router:Router){

  }
  ngOnInit(){
    this.studentDataFormValidations();
}
studentDataFormValidations(){
  this.signUpForm = this.formBuilder.group({
    userName:['',[Validators.required,Validators.maxLength(40)]],
      userMob:['',[Validators.required, Validators.maxLength(12)]],
      userEmail:['',[Validators.required, Validators.email]],
      userPass:['',[Validators.required, Validators.maxLength(8)]],
      gender:['',[Validators.required]],
      userCheck:['',[Validators.requiredTrue]],
      // painting:['',[Validators.required]],
      // dancing:['',[Validators.required]],
    
})
  }
  submitFormData(value:any){
    this.FormData=this.signUpForm.value;
    console.log("FormData",this.FormData);
    
      this.FormData = value;
      console.log(value);
      let date=this.FormData.date?.split('-').reverse().join('-')
      console.log(date);
      // let name1 = this.FormData.signUpForm.trim()
      // let name = name1.toUpperCase();
      // console.log(name1);
      
      // console.log(name);
      let adminurl="http://localhost:3000/admin";
      this.dataservice.postAdminCall(adminurl,this.FormData).subscribe(data=>{
      
        console.log(data);
        
      })
      this.signUpForm.reset();
  this.router.navigateByUrl('/admin/adminsuccess')

}
adminSuccess(){
  this.router.navigateByUrl('/admin/adminlanding')
}
}




