import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  constructor() { }

  request:any = {};

  ngOnInit(): void {

    this.request={
      client: "Sanelisiwe Sogiba",
      errand: "Lawn Mowing",
      address: "762 Block UU, Soshanguve, Pretoria, 0152",
      comment: "Hit the bells at the gate and i will open the gate for you."
    }
  }

}
