import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/interface/jobs';
import { JobsService } from 'src/app/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private service:JobsService) { }

  Jobs:Job[] = [ ]
  


  runner_id: any;

  ngOnInit(): void {

    this.runner_id=localStorage.getItem("runnerID");
   this.getJobs();
  }

  
  getJobs(){
    this.service.getJobs(this.runner_id).subscribe((res=>{
      this.Jobs = res;
      console.log('Hello');
      console.log(res);
      
    }));
      
      
      
     
   
  }


}
