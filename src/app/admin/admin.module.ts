import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { AdminsuccessComponent } from './adminsuccess/adminsuccess.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminfaillComponent } from './adminfaill/adminfaill.component';
import { HotellistComponent } from './hotellist/hotellist.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AdminComponent,
    AdminlandingComponent,
    AdminsigninComponent,
    AdminsignupComponent,
    AdminsuccessComponent,
    AdminfaillComponent,
    HotellistComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,ReactiveFormsModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AdminModule { }
