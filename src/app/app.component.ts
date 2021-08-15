
import { Component } from '@angular/core';
import { UserService } from 'src/service/user.service';
import { Hospital } from './modal/hosiptal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[
    UserService
  ]
})

export class AppComponent {
  hospitals:Array<Hospital>;

constructor(private userService:UserService){
    this.hospitals=[];
    this.userService.getAllHospital().subscribe((hospitalLists:Hospital[])=>{
    this.hospitals=hospitalLists;
  })

}
 
}
