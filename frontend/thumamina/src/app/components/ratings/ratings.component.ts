import { Component, OnInit } from '@angular/core';
// import { Validators } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ratings } from 'src/app/interface/user';
import { RatingsService } from 'src/app/services/ratings.service';


@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css'],

})
export class RatingsComponent implements OnInit {
  
  runner_id:any;
  ratings:Ratings[]= [];

  constructor(private service:RatingsService) { }

  ngOnInit(): void {

this.runner_id=localStorage.getItem("runnerID");
this.getRatings();
    
  }

  getRatings(){
    this.service.getRatings(this.runner_id).subscribe((res=>{
     this.ratings= res;
    
      console.log(res);
   
    }));

    console.log('helloo')

  }

}
