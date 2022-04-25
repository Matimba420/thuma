import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Job } from 'src/app/interface/jobs';
import { JobsService } from 'src/app/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  form: FormGroup = new FormGroup({
    status: new FormControl('')
  });

  constructor(private service:JobsService) { }

  Jobs:Job[] = [ ]

  submitted = false;
  


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

  myFunction() {
    console.log(this.form.status);  
    
  }
  
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));


  



}
}
