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

  constructor(private service:RequestsService) { }

 

  ngOnInit(): void {

  this.client_id=localStorage.getItem("clientId");
  this.getRequests();
  }

getRequests(){
  this.service.getRequests().subscribe((res=>{
    this.requests = res
    console.log('hello');
    console.log(res);
    
    
  }));

}

}
