import { Component, OnInit } from '@angular/core';
// import { Validators } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css'],

})
export class RatingsComponent implements OnInit {
  

  rating3: any
  ratings: any
  rating: any
  form: any;
  fb: any;

  constructor() { }

  ngOnInit(): void {


    this.ratings={
      client: "Zizi Zozi",
      errand: "Shopping",
      address: "44 Stanely Avenue, Braamfontein, Johannesburg, 2001",
      comment: "The service was great and my dress fits me perfecly thank you.I recommend Zizi to everyone that wanna do shooping.",
      rating: 5,
    };
    // this.rating = 0;
    // this.form = this.fb.group({
    //   rating1: ['', Validators.required],
    //   rating2: [4]
    // });

    
  }

}
