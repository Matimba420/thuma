import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user.service';
import Validation from 'src/app/utils/Validation';

@Component({
  selector: 'app-runner-profile',
  templateUrl: './runner-profile.component.html',
  styleUrls: ['./runner-profile.component.css']
})
export class RunnerProfileComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    confirmPassword: new FormControl(''),
    
  });

  
  submitted = false;
  Update: FormGroup | undefined;
  option: any;
  selected:any;
  constructor(private formBuilder: FormBuilder, private service: UserService, private router:Router, private route: ActivatedRoute ){
    
    FormGroup ;
  }


  register(){
    this.service.addUser(this.form.value).subscribe((res:any)=>{
      console.log(res)
      alert(res);
    }
    )

  
  }
  ngOnInit(): void {
    this.Update = this.formBuilder.group({
     
    });

    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        surname: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
        cell_no: ['', [Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(2), Validators.maxLength(10)]],
    
     
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
    //alert(res)
    this.router.navigateByUrl('/log',{replaceUrl:true});
    
  }
  

}
  
function user(user: User) {
  throw new Error('Function not implemented.');
}

