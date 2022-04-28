import { Component, OnInit } from '@angular/core';
import { Runner } from 'src/app/interface/user';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-runner',
  templateUrl: './runner.component.html',
  styleUrls: ['./runner.component.css']
})
export class RunnerComponent implements OnInit {

  runners:Runner[]=[];
  numRunners:any
 
  constructor(private service:AdminService) { }

  ngOnInit(): void {
    this.getRunners();
  }
  getRunners(){
    this.service.getAllRunners().subscribe((res:any)=>{
      this.runners=res
     console.log(this.runners);
     
        // this.numRunners = this.runners.length;
    
    })
  }


}
