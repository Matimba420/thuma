import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.component.html',
  styleUrls: ['./earnings.component.css']
})
export class EarningsComponent implements OnInit {

  earnings:any

  constructor() { }

  ngOnInit(): void {

    this.earnings={
      client: "Zizi Zozi",
      errand: "Shopping",
      amount: "R1500"
   
      
    };
  }

}
