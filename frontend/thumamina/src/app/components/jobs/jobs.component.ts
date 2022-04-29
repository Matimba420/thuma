import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm} from '@angular/forms';
import { Job } from 'src/app/interface/jobs';
import { JobsService } from 'src/app/jobs.service';
import Swal from 'sweetalert2'

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

  isSubmitted = false;
  
  errand: any={
    id:"any",
    status:"any"
  };

  runner_id: any;

  ngOnInit(): void {

    this.runner_id=localStorage.getItem("runnerID");
   this.getJobs();


  
   
  }
  submitForm(form: NgForm) {
    this.isSubmitted = true;
    if(!form.valid) {
      return false;
    } 
    else {
     return JSON.stringify(form.value)

    }
  }


  
  getJobs(){
    this.service.getJobs(this.runner_id).subscribe((res=>{
      this.Jobs = res;
      console.log('Hello');
      console.log(res);

      
    }));

   
   
  };


  updateJob(){
    this.service.updateStatus(this.errand).subscribe((res=>{
      console.log('updated');
      return Swal.fire({
        title: 'Success!',
        text: 'Successfully Updated',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      
    }))

  }


  myFunction(job) {
    this.errand.id=job.id;
    this.errand.status=this.form.value.status;
   // console.log(this.form.value.status);  
   // console.log(job.id );
   console.log(this.errand);
   this.updateJob();
    
    
  }
  
  onSubmit(): void {




}

}
