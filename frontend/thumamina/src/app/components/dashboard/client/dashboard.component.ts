import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interface/user';
import { AddressService } from 'src/app/services/address.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

clients:User[]=[];
runners:any=[];
numClients:any;
numRunners:any;

  constructor(private service:UserService) { }

getClients(){
  this.service.getUsers().subscribe((res:any)=>{
    console.log(res)
    this.clients=res;
    this.numClients = this.clients.length;

  })
}





  ngOnInit(): void {
    this.getClients();
    
  }

}


