import { Component, OnInit } from '@angular/core';
import { RatingsService } from 'src/app/services/ratings.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
  ratings: any = [];
  runner_id:any;

  constructor(private ratingsService: RatingsService) { }

  ngOnInit(): void {
    this.runner_id=localStorage.getItem("runnerID");
    this.ratingsService.getRatings(this.runner_id).subscribe((res) => {
      console.log(res);
      this.ratings = [...res];
      console.log(this.ratings);
    })

    console.log(this.ratings);
  }

}
