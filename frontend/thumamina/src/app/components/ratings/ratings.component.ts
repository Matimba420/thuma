import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css'],

})
export class RatingsComponent implements OnInit {
  ratings: { client: string; errand: string; address: string; comment: string; } | any;

  rating3: any

  constructor() { }

  ngOnInit(): void {


    this.ratings={
      client: "Zizi Zozi",
      errand: "Shopping",
      address: "44 Stanely Avenue, Braamfontein, Johannesburg, 2001",
      comment: "The service was great and my dress fits me perfecly thank you.I recommend Zizi to everyone that wanna do shooping."
    }

    
  }

}
