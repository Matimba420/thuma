import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddressService } from 'src/app/services/address.service';
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
  submitted: boolean | undefined;

  





  constructor(private service: AddressService) { }

  getAddress(){
    this.service.getAddress(this.form.value).subscribe((res:any)=>{
      console.log(res)
    })
  }

  ngOnInit(): void {
    this.getAddress;
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
