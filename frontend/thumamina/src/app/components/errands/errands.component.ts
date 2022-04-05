import { Component, OnInit, NgModule } from '@angular/core';
import { Service } from 'src/app/interface/service';

@Component({
  selector: 'app-errands',
  templateUrl: './errands.component.html',
  styleUrls: ['./errands.component.css']
})
export class ErrandsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  //Items will come from backend id serial primary key,
	// name varchar(50),
	// description varchar(255),
	// cost numeric(5,2)
  //imgurl()
  
  items: Service[] = [
    {
      name: "1",
      description: "fsffds fda f",
      cost: "r2000.00",
      imgurl: "fs"
    },{
      name: "1",
      description: "fsffds fda f",
      cost: "r2000.00",
      imgurl: "fs"
    }
  ];



}
