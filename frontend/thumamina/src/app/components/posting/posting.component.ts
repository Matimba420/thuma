import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddressService } from 'src/app/services/address.service';
import { UserService } from 'src/app/services/user.service';
//import { FormControl, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css']
})
export class PostingComponent implements OnInit {
  form: FormGroup = new FormGroup({
    comment: new FormControl (''),
    street_address: new FormControl(''),
    suburb: new FormControl(''),
    city: new FormControl(''),
    postal_code: new FormControl(''),

  });
  
  clientId:any;
  serviceId:any;
  request_id:any;
  submitted: boolean | undefined;
reqdata : any = {};
addressData : any= {};

  constructor(private service: AddressService) { }

  addRequest(){

    this.reqdata = {
    client_id: this.clientId,
    service_id : this.serviceId,
    comment : this.form.value.comment
    
    }

    this.addressData ={
      request_id:this.request_id,
      street_address: this.form.value.street_address,
      suburb:this.form.value.suburb,
      city: this.form.value.city,
      postal_code:this.form.value.postal_code
    }

   
    console.log(this.addressData);
    
  let obj =  this.service.addRequest(this.reqdata);
   obj.subscribe((res:any)=>{
    console.log(res)
  });
    
  }

  async getMaxId(){
    this.service.getMaxId(this.clientId).subscribe((res:any)=>{
      this.request_id=res;
      this.addressData.request_id = res;
      console.log(this.request_id);
    })
  }

  async getAddress(){

    this.addRequest();

    await this.getMaxId()
    
    this.service.getAddress(this.addressData).subscribe((res:any)=>{
      console.log(res)
    })
  }

  ngOnInit(): void {
    this.getAddress;
    this.clientId=localStorage.getItem("clientID");
    this.serviceId=localStorage.getItem("serviceID"); 
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null));
  }
  myFunction(){
    console.log(this.form.value);
  
  }

}
