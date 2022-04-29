import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { JobsService } from 'src/app/jobs.service';
import { Request } from 'src/app/interface/jobs';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {


  clients:any[];
  Jobs:Request[] = [ ];
  clientId:any;
  id:any;
    
  constructor(private service:AdminService, private jobService:JobsService ) { }

  ngOnInit( ): void {
    this.id=this.clientId=localStorage.getItem("clientId");
    this.clientId=localStorage.getItem("clientId");
    this.getUserById();
    this.getRequest();
  }

  getRequest(){
    this.jobService.getRequest(this.clientId).subscribe((res=>{
      this.Jobs = res;
      console.log('Hello');
      console.log(res);

      
    }));

   
  };

  getUserById(){
    this.service.getUserById(this.id).subscribe((res=>{
      this.clients=res;
    }));
    
  }


}
