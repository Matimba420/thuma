import { Component, OnInit } from '@angular/core';
import { Service } from '../interface/service';
import { ErrandsService } from '../services/errands.service';

@Component({
  selector: 'app-get-errands',
  templateUrl: './get-errands.component.html',
  styleUrls: ['./get-errands.component.css']
})
export class GetErrandsComponent implements OnInit {

  items: Service[] = [


  ];
  constructor(private errandService:ErrandsService) { }

  ngOnInit(): void {
    this.getService();
  }


  getService(){
    this.errandService.getService().subscribe((res:any)=>{
      console.log(res);
      this.items = res;

      
      
    });
  }
}
