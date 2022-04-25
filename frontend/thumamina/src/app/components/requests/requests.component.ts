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

  reqData: any;
  runner_id: string;

  constructor(private service:RequestsService, private userService: UserService,private route : Router) { }

 

  ngOnInit(): void {


    // this.acceptRequest();

  this.client_id=localStorage.getItem("clientId");
  this.getRequests();
  this.runner_id= localStorage.getItem("runnerID");

  }

getRequests(){
  this.service.getRequests().subscribe((res=>{
    this.requests = res
    console.log('hello');
    console.log(res[0].id);
   // localStorage.setItem("requestID", this.requests.id);
    this.reqData = res[0].id;
    localStorage.setItem("reqData",this.reqData);
    
  }));

}

acceptRequest(){
  this.service.accept(this.runner_id).subscribe((res=>{
  this.accept = res ;
console.log(res);
this.route.navigateByUrl('history', {state :{id :this.runner_id} })

}))}
myFunction(request){
  console.log('hello');
  console.log(request.id);
}


getUsers(){
  this.userService.getUsers().subscribe((res) =>{
    
  })
}
}
