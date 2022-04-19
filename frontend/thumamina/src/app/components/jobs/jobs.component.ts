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

  Jobs:Job[] = [];
  id: any;

  ngOnInit(): void {

    this.id=localStorage.getItem("clientID");
   this.getJobs();
  }

  
  getJobs(){
    this.service.getJobs().subscribe((res:any)=>{
      console.log(res);
      // this.Jobs = res;
    });
  }


}
