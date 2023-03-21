
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UsersuccessComponent } from './usersuccess/usersuccess.component';
import { HttpClientModule } from '@angular/common/http';
import { UserfaillComponent } from './userfaill/userfaill.component';
import { UserhotellistComponent } from './userhotellist/userhotellist.component';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UserComponent,
    UserlandingComponent,
    UsersigninComponent,
    UsersignupComponent,
    UsersuccessComponent,
    UserfaillComponent,
    UserhotellistComponent,
    HotelbookingComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    SharedModule
    
  
  ]
})
export class UserModule { }
