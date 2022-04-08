import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private router: Router, private route:ActivatedRoute) { }

  registerForm: any =FormGroup ;
  submitted = false;

   //only number will be added
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
 
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
 
  get f() { return this.registerForm.controls; }
  onSubmit() {

    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    if (this.submitted) {
      //alert("Great!!");
    }

  }

  myFunction()
  {
      // console.log("i am working");
      console.log(this.registerForm.value.number);
      console.log(this.registerForm.value.password);
      console.log(this.registerForm.value.role);
  }

  nextPage(){
    console.log(this.registerForm.value.role);
    
    if (this.registerForm.value.role==="Service provider"){
      this.router.navigateByUrl('/run_home',{replaceUrl:true});
    }
    if (this.registerForm.value.role==="Client"){
      this.router.navigateByUrl('/items',{replaceUrl:true});
    }
    
    
  
  }


  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      number: ['', [Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(2), Validators.maxLength(10)]],
      password: ['', [Validators.required]],
      role:['']
    });
  }
}


