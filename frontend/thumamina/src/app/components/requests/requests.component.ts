import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Requests } from 'src/app/interface/user';
import { RequestsService } from 'src/app/services/requests.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  client_id:any;
  requests:Requests[]=[]
  request_id:any;
  accept:any;

  reqData: any={
    runner_id:"any",
    id:"any"
  };
  runner_id: any;

  constructor(private service:RequestsService, private userService: UserService,private route : Router) { }

 

  ngOnInit(): void {


   // this.acceptRequest();

  
  this.getRequests();
  this.runner_id= localStorage.getItem("runnerID");

  }

getRequests(){
  this.service.getRequests().subscribe((res=>{
    this.requests = res
    console.log(res);
    console.log(res[0].id);
   
    
  }));

}

acceptRequest(){
  this.service.accept(this.reqData).subscribe((res=>{
  this.accept = res ;
  console.log(res);

}))}


myFunction(request){
  console.log('hello');
  console.log(request);
  this.reqData.id=request;
  this.reqData.runner_id=localStorage.getItem("runnerID");
  console.log(this.reqData);

  this.acceptRequest();
  
  
}


getUsers(){
  this.userService.getUsers().subscribe((res) =>{
    
  })
}
}
