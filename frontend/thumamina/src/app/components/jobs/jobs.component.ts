import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private service:JobsService) { }

  Jobs:any[] = [];

  ngOnInit(): void {

    // this.request={
    //   client: "Sanelisiwe Sogiba",
    //   errand: "Lawn Mowing",
    //   address: "762 Block UU, Soshanguve, Pretoria, 0152",
    //   status: ''
    // }
  }

  getJobs(){
    this.service.getJobs().subscribe((res:any)=>{
      console.log(res);
      this.Jobs = res;
    });
  }


}
