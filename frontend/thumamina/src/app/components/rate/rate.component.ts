import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RatingsService } from 'src/app/services/ratings.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

 form:any = FormGroup ;
  
  rating3 = 0;

  rateData:any={
    runner_id:"any",
    client_id: "any",
    rating: "any",
    reason: "any",
    request_id:"any"
  }
 



  constructor(private fb: FormBuilder, private service:RatingsService) { 

   
  }

  ngOnInit(): void {

    
    this.form = this.fb.group({
      rating: ['', Validators.required],
      reason:['']
    })

    
    this.rateData.runner_id=localStorage.getItem("runnerID");
    this.rateData.client_id=localStorage.getItem("clientID");
  }


  onSubmit(){
    console.log(this.form.value.rating);

}





rate(){
  // this.service.RateRunner(this.rateData).subscribe((res=>{
  //   this.form.value.rating = res ;
  //   console.log(res);

  this.rateData.reason=this.form.value.reason;
  this.rateData.rating=this.form.value.rating;
  this.rateData.request_id=localStorage.getItem("request_id");

  console.log(this.rateData);
  
 
  this.service.RateRunner(this.rateData).subscribe((res) => {
    console.log(res);
    this.form.value.rating = res;
    return Swal.fire({
      title: 'Success!',
      text: 'Successfully Rated',
      icon: 'success',
      confirmButtonText: 'Ok'
    })



})}



}










