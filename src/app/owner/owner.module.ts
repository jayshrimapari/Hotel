import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner.component';
import { OwnerlandingComponent } from './ownerlanding/ownerlanding.component';
import { OwnersigninComponent } from './ownersignin/ownersignin.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OwnerfaillComponent } from './ownerfaill/ownerfaill.component';
import { OwnerhotellistComponent } from './ownerhotellist/ownerhotellist.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    OwnerComponent,
    OwnerlandingComponent,
    OwnersigninComponent,
    OwnersignupComponent,
    OwnersuccessComponent,
    OwnerfaillComponent,
    OwnerhotellistComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    FormsModule,
    HttpClientModule,ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
  ]
  
})
export class OwnerModule { }
