import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from './owner.component';
import { OwnerfaillComponent } from './ownerfaill/ownerfaill.component';
import { OwnerhotellistComponent } from './ownerhotellist/ownerhotellist.component';
import { OwnerlandingComponent } from './ownerlanding/ownerlanding.component';
import { OwnersigninComponent } from './ownersignin/ownersignin.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';

const routes: Routes = [
  //{ path: '', component: OwnerComponent },
  {path:'ownerlanding',component:OwnerlandingComponent},
  {path:'', redirectTo:'ownerlanding', pathMatch:'full'},
  {path:'ownersignin',component:OwnersigninComponent},
  {path:'ownersignup',component:OwnersignupComponent},
  {path:'ownersuccess',component:OwnersuccessComponent},
  {path:'ownerfaill',component:OwnerfaillComponent},
  {path:'ownerhotellist',component:OwnerhotellistComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
