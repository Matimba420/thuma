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
  run_id:any
  
 
  constructor(private service:AdminService) { }

  ngOnInit(): void {
    this.getRunners();
  }
  getRunners(){
    this.service.getAllRunners().subscribe((res:any)=>{
      this.runners=res
     console.log(this.runners);
     this.run_id=this.runners[0].id;
     

     
        // this.numRunners = this.runners.length;
    
    })
  }


  myFunction(){
   // console.log(this.run_id);
    this.service.deactivate(this.run_id).subscribe((res:any)=>{
      console.log(res);
      
    })
    
  }

}
