import { Component, OnInit, NgModule } from '@angular/core';
import { Service } from 'src/app/interface/service';
import { ErrandsService } from 'src/app/services/errands.service';

@Component({
  selector: 'app-errands',
  templateUrl: './errands.component.html',
  styleUrls: ['./errands.component.css']
})
export class ErrandsComponent implements OnInit {
  

  constructor(private errandService:ErrandsService) { }


  ngOnInit(): void {
   this.getService()
  }


  
  items: Service[] = [
    // {
    //   name: "Shopping",
    //   description: " The runner will go shopping on your behalf  ",
    //   cost: " R300",
    //   imgurl: " "
    // },{
    //   name: " Queueing ",
    //   description: "  The runner will go shopping on your behalf",
    //   cost: "r2000.00",
    //   imgurl: "fs"
    // },
    // {
    //   name: " mown lawning ",
    //   description: "  The runner will go shopping on your behalf",
    //   cost: "r2000.00",
    //   imgurl: "fs"
    // },
    // {
    //   name: " mown lawning ",
    //   description: "  The runner will go shopping on your behalf",
    //   cost: "r2000.00",
    //   imgurl: "fs"
    // }


  ];


getService(){
    this.errandService.getService().subscribe((res:any)=>{
      console.log(res);
      
    });
  }

}
