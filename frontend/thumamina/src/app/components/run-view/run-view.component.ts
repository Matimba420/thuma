import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/interface/jobs';
import { JobsService } from 'src/app/jobs.service';
import { AdminService } from 'src/app/services/admin.service';
import { RunnerService } from 'src/app/services/runner.service';

@Component({
  selector: 'app-run-view',
  templateUrl: './run-view.component.html',
  styleUrls: ['./run-view.component.css']
})
export class RunViewComponent implements OnInit {

  constructor(private jobService: JobsService, private service:AdminService, private runService:RunnerService) { }
  clients:any[];
  Jobs:Job[] = [ ];
  runnerId:any;
  id:any;
  rating:any;
  reviews:any;

  ngOnInit(): void {

    this.id=localStorage.getItem("runnerId");
    this.runnerId=localStorage.getItem("runnerId");
    this.getUserById();
    this.getJobs();
    this.getTotalRating();
    this.getReviews();
  }

  getTotalRating(){
    this.runService.getTotalRating(this.runnerId).subscribe((res=>{
      this.rating =res;
      console.log(this.rating);
      
    }))
  }
  getReviews(){
    this.runService.getReviews(this.runnerId).subscribe((res=>{
      this.reviews =res;
      console.log(this.reviews);
      
    }))
  }

  getJobs(){

    this.jobService.getJobs(this.runnerId).subscribe((res=>{
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
