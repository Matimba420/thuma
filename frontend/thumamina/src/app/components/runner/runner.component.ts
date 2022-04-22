import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-runner',
  templateUrl: './runner.component.html',
  styleUrls: ['./runner.component.css']
})
export class RunnerComponent implements OnInit {

  runners:any=[];
numClients:any;
numRunners:any;

  constructor(private service:AdminService) { }

  ngOnInit(): void {
    this.getRunners();
  }
  getRunners(){
    this.service.viewClients().subscribe((res:any)=>{
      console.log(res)
      this.runners=res;
      this.numRunners = this.runners.length;
  
    })
  }
}
