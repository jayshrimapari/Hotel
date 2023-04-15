import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.scss']
})
export class UsersignupComponent {
  signUpForm!:FormGroup;

  constructor(private fb:FormBuilder, private dataservice : DataService,private router:Router) { }

  ngOnInit(): void {
    this.formValidation()
  }
  formValidation(){
    this.signUpForm = this.fb.group({
      userName:['',[Validators.required,Validators.maxLength(40)]],
      userMob:['',[Validators.required, Validators.maxLength(12)]],
      userEmail:['',[Validators.required, Validators.email]],
      userPass:['',[Validators.required, Validators.maxLength(8)]],
      gender:['',[Validators.required]],
      userCheck:['',[Validators.requiredTrue]]

    });
  }
  
  postUserdata(data:any){
    console.log(data);
    //postapi
    this.dataservice.postUserCall(data).subscribe((res)=>{
      console.log(res);   
  })
}
userSuccess(){
  this.router.navigateByUrl('/user/userlanding')
}
}

