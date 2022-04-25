import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor(private service:AdminService) { }

  numRunners:any;
  numClients:any;

  ngOnInit(): void {
    this.getTotalRunners();
    this.getTotalClients();
  }

  getTotalRunners(){
    this.service.getTotallRunners().subscribe((res:any)=>{
      this.numRunners=res;
      
    })
  }

  getTotalClients(){
    this.service.getTotallClients().subscribe((res:any)=>{
      this.numClients=res;
      
    })
  }


}
