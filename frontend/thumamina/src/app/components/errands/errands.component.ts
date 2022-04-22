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
  

  clientId: any;
  serviceId: any;

  reqdata:any = {};


  constructor(private errandService:ErrandsService, private router:Router, private route: ActivatedRoute) { }
  data:any;

  ngOnInit(): void {
   this.getService()
   this.clientId=localStorage.getItem("clientID");
  this.serviceId=localStorage.getItem("serviceID"); 
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

  addRequest(){

    this.reqdata = {
    client_id: this.clientId,
    service_id : this.serviceId,
    //comment : this.form.value.comment

    
    
    }

}
}
