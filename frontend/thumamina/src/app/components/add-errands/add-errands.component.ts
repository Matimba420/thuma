import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-errands',
  templateUrl: './add-errands.component.html',
  styleUrls: ['./add-errands.component.css']
})
export class AddErrandsComponent implements OnInit {
 
  errand:any ={
    name: "any",
    description: "any",
    cost: "any",
    image: "any",
  };

form!:any

addErrandForm: any = new FormGroup({
   
  name: new FormControl(''),
  description: new FormControl(''),
  cost: new FormControl(''),
  image: new FormControl(''),
}) ;


  constructor( private service:AdminService) { }

  ngOnInit(): void {
   
  }

  



  alertWithSuccess(){
    this.errand=this.addErrandForm;
    this.service.addService(this.errand).subscribe((res:any)=>{
     console.log(res);
      
    })
    console.log(this.addErrandForm.value);
    
  //  Swal.fire('Thank you admin', 'Errands Successfully Added!', 'success')
  };

  addService(){
    
    
    this.service.addService(this.addErrandForm.value).subscribe((res=>{
     console.log(res);
 
    }));
  }
   

}
