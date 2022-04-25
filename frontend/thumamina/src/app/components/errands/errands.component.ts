import { Component, OnInit, NgModule } from '@angular/core';
import { Service } from 'src/app/interface/service';
import { ErrandsService } from 'src/app/services/errands.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-errands',
  templateUrl: './errands.component.html',
  styleUrls: ['./errands.component.css']
})


export class ErrandsComponent implements OnInit {
  

  clientId: any;
  serviceId: any;
  requestData:any = {};

  


  constructor(private errandService:ErrandsService, private router:Router, private route: ActivatedRoute, private service:AddressService) { }
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
  this.addRequest()

  

  this.router.navigateByUrl('/posting', {replaceUrl:true});
  
  
}
getService(){
    this.errandService.getService().subscribe((res:any)=>{
      console.log(res);
      this.items = res;
    });
  }

  addRequest(){

    this.requestData = {
    client_id: this.clientId,
    service_id : this.serviceId
    }

    let obj= this.service.addRequest(this.requestData);
    obj.subscribe((res:any)=>{
      console.log(res);
      
    })
  
    
    }

}

