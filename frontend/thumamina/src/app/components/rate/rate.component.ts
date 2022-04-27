import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

 form:any = FormGroup ;
  rating3: any;

  rateData:any={
    runner_id:"any",
    client_id: "any",
    rating: "any",
    reason: "any",
    request_id:"any"
  }



  constructor(private fb: FormBuilder) { 

   
  }

  ngOnInit(): void {

   // this.rating3 = 0;
    this.form = this.fb.group({
      rating: ['', Validators.required],
    })
  }


  rate(){
    console.log(this.rating3);

    this.rateData.runner_id=localStorage.getItem("runner_id");
    this.rateData.client_id=localStorage.getItem("clientID");
    
  }
}
