import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    surburb: new FormControl(''),
    city: new FormControl(''),
    postal_code: new FormControl(''),
   


  });
  submitted: boolean | undefined;

  





  constructor() { }

  ngOnInit(): void {
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
