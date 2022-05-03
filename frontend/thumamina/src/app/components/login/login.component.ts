import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import  Validation from '../../utils/Validation';
import { UserService } from 'src/app/services/user.service';
import {Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interface/user';
import Swal from 'sweetalert2';

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
  constructor(private formBuilder: FormBuilder, private service: UserService, private router:Router, private route: ActivatedRoute ){
    
    registerForm: FormGroup ;
  }


  register(){
    if(this.form.value.role==="Client"){
      this.service.addUser(this.form.value).subscribe((res:any)=>{
        console.log(res)
       
       }
       )
    }else if(this.form.value.role==="Service provider"){
      
        this.service.addRunner(this.form.value).subscribe((res:any)=>{
          console.log(res)         }
            ) 
    }
   
    
    

  
  }

  

  
  ngOnInit(): void {


    this.registerForm = this.formBuilder.group({
     
    });

    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        surname: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
        cell_no: ['', [Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(2), Validators.maxLength(10)]],
      email:[],
      role: [''],
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

  alertWithSuccess(){
    Swal.fire('Thank you...', 'You succesfully register!', 'success')
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
    //alert(res)
    this.router.navigateByUrl('/log',{replaceUrl:true});
    
  }
  
  

}
  
function user(user: User) {
  throw new Error('Function not implemented.');
}

