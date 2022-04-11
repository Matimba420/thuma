import { Component, OnInit, NgModule } from '@angular/core';
import { Service } from 'src/app/interface/service';
import { ErrandsService } from 'src/app/services/errands.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-errands',
  templateUrl: './errands.component.html',
  styleUrls: ['./errands.component.css']
})
export class ErrandsComponent implements OnInit {
  

  constructor(private errandService:ErrandsService, private router:Router, private route: ActivatedRoute) { }
  data:any;

  ngOnInit(): void {
   this.getService()
  }


  
  items: Service[] = [
 


  ];

myFunction(item: any){
  console.log('Hello world');
  localStorage.setItem("serviceID",item.id);
  console.log(item.id);
  this.router.navigateByUrl('/posting', {replaceUrl:true});
  
  
}
getService(){
    this.errandService.getService().subscribe((res:any)=>{
      console.log(res);
      this.items = res;
    });
  }

}
