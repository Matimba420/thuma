import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css']
})
export class PostingComponent implements OnInit {

 

  form!:FormGroup;
  
  clientId:any;
  serviceId:any;
  request_id:any;
  submitted: boolean | undefined;
reqdata : any = {};
addressData : any= {};

  constructor(private service: AddressService) { }

  ngOnInit(): void {

   this.form = new FormGroup({
      street_address: new FormControl('', [Validators.required, Validators.minLength(3)]),
      comment: new FormControl('', [Validators.required]),
      city: new FormControl('', Validators.required),
      suburb: new FormControl('',Validators.required),
      postal_code : new FormControl('',[Validators.required,Validators.maxLength(4),Validators.minLength(4)])
    });

    this.getAddress;
    this.clientId=localStorage.getItem("clientID");
    this.serviceId=localStorage.getItem("serviceID"); 
  }


  

  alertWithSuccess(){
    Swal.fire('Thank you...', 'Your post is succesfully sent😉!', 'success')
  }
  


  addRequest(){

    this.reqdata = {
    client_id: this.clientId,
    service_id : this.serviceId,
    //comment : this.form.value.comment
    
    }

    this.addressData ={
      request_id:this.request_id,
      street_address: this.form.value.street_address,
      suburb:this.form.value.suburb,
      city: this.form.value.city,
      postal_code:this.form.value.postal_code,
      comment:this.form.value.comment
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





 
  get f(){
    return this.form.controls;
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
