import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import  Validation from '../../utils/Validation';
import { UserService } from 'src/app/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss',]
  
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    cell_no: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    confirmPassword: new FormControl(''),
    role: new FormControl(''),
    acceptTerms: new FormControl(false)
    
  });

  sessionTrue: boolean = false;
  submitted = false;
  registerForm: FormGroup | undefined;
  option: any;
  selected:any;
  constructor(private formBuilder: FormBuilder, private service: UserService){
    
    registerForm: FormGroup ;
  }


  register(){
    this.service.addUser(this.form.value).subscribe((res:any)=>{
      console.log(res)
      
    }
    )
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
     
    });

    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        lastname: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(20)
          ]
        ],
        number: ['', [Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(2), Validators.maxLength(10)]],
      email:[],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(15)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
    
    
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
 
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  myFunction(){
    console.log(this.form.value);
    this.register();
    
  }
  

}
  
function user(user: any) {
  throw new Error('Function not implemented.');
}

