import { Component, OnInit } from '@angular/core';
import { DashService } from 'src/app/services/dash.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  clients:any=[];
  numClients:any;
  runners:any=[];
  numRunners:any;
  
 

  constructor(private service:DashService) { }
  
  
  ngOnInit(): void {
    // this.getClients();
    this.getRunners();
    this.getClients();
   
   
  }

  getClients(){
    this.service.getClients().subscribe((res: any)=>{
      console.log(res)
      this.clients=res;
      this.numClients=this.clients.length;
      console.log('num clients: '+this.numClients);
      
    
    })
  }
  getRunners(){
    this.service.getRunners().subscribe((res: any)=>{
      console.log(res)
      this.runners=res;
      this.numRunners=this.runners.length;
      console.log('num Service Prov: '+this.numRunners);
      
      
    })
  }



  

}
