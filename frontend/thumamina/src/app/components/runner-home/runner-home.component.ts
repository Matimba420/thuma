import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/interface/jobs';

@Component({
  selector: 'app-runner-home',
  templateUrl: './runner-home.component.html',
  styleUrls: ['./runner-home.component.css']
})
export class RunnerHomeComponent implements OnInit {

  items: Job[] = [

 


  ];


  constructor() { }

  ngOnInit(): void {
  }

}
