import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';
import { UserComponent } from './user.component';
import { UserfaillComponent } from './userfaill/userfaill.component';
import { UserhotellistComponent } from './userhotellist/userhotellist.component';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UsersuccessComponent } from './usersuccess/usersuccess.component';

const routes: Routes = [
  //{ path: '', component: UserComponent },
  {path:'userlanding',component:UserlandingComponent},
  {path:'', redirectTo:'userlanding', pathMatch:'full'},
  {path:'usersignin',component:UsersigninComponent},
  {path:'usersignup',component:UsersignupComponent},
  {path:'usersuccess',component:UsersuccessComponent},
  {path:'userfaill',component:UserfaillComponent},
  {path:'userhotellist',component:UserhotellistComponent},
  {path:'hotelbooking',component:HotelbookingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
