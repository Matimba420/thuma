import { Component, OnInit } from '@angular/core';
import { Requests } from 'src/app/interface/user';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  client_id:any;
  requests:Requests[]=[]
  request_id:any;

  reqData: any;
  runner_id: string;

  constructor(private service:RequestsService) { }

 

  ngOnInit(): void {

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
myFunction(request){
  console.log('hello');
  console.log(request.id);
}

}
