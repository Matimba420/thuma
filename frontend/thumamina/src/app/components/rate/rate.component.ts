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


  constructor(private fb: FormBuilder) { 

   
  }

  ngOnInit(): void {

    this.rating3 = 0;
    this.form = this.fb.group({
      rating: ['', Validators.required],
    })
  }

}
