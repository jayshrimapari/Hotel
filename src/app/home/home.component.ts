import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router:Router){

  }
  
    
    Journey(journey:string){
      if(journey == 'Admin'){
       this.router.navigateByUrl('/admin')
     }
      else if(journey == 'Owner'){
        this.router.navigateByUrl('/owner')
     }
      else{
        this.router.navigateByUrl('/user')
     }
      }

}
