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


  myFunction(person){
  
    this.run_id=this.runners[0].id;
    localStorage.setItem("runnerId", this.run_id);
    console.log('This is the id :' +this.run_id);
    
  }

}
