import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service:UserService) { }


  People: any=[];
  ngOnInit(): void {
    // this.getUser();
  }
  // getUser(){
  //   this.service.getUsers().subscribe((res:any)=>{
  //     console.log(res);
  //     this.People = res;
  //   });
  // }

}


