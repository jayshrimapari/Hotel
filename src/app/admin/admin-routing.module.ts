import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminfaillComponent } from './adminfaill/adminfaill.component';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { AdminsuccessComponent } from './adminsuccess/adminsuccess.component';
import { HotellistComponent } from './hotellist/hotellist.component';

const routes: Routes = [
  // { path: '', component: AdminComponent },
  {path:'adminlanding',component:AdminlandingComponent},
  {path:'', redirectTo:'adminlanding', pathMatch:'full'},
  {path:'adminsignin',component:AdminsigninComponent},
  {path:'adminsignup',component:AdminsignupComponent},
  {path:'adminsuccess',component:AdminsuccessComponent},
  {path:'adminfaill',component:AdminfaillComponent},
  {path:'hotellist',component:HotellistComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
