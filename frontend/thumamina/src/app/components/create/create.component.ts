import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private router: Router, private route:ActivatedRoute, private service:UserService) { }



  // role:any ='client';
  isloading:boolean=false;

  registerForm: any = new FormGroup({
   
      cell_no: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
  }) ;
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
  onSubmit() {}

  signIn(){
    console.log(this.registerForm.value)

    this.service.userLogin(this.registerForm.value)
    {
        this.isloading=true;
        this.service.userLogin(this.registerForm.value).subscribe({
          next:(data) =>{
            this.isloading=false;
            localStorage.setItem("access", JSON.stringify(data));
            console.log(data)
            if(data[0].role=='Client'){
              localStorage.setItem("clientID",data[0].id);
              this.router.navigateByUrl('/errands',{replaceUrl:true});
            }
            if(data[0].role=='Service provider'){
              this.router.navigateByUrl('/run_home',{replaceUrl:true});
              localStorage.setItem("runnerID",data[0].id);
            }
            if(data[0].role=='Admin'){
              this.router.navigateByUrl('/dash',{replaceUrl:true});
            }
            
          },

          error: (e) => (
            console.log(e),
             Swal.fire({
              confirmButtonColor: "red",
              icon: 'error',
              title: e.error.error,
              footer: 'Please verifty your login credentials'}),
              this.isloading=false
          )

      });

  }





 

  nextPage();{
    // console.log(this.registerForm.value.role);
    
    // if (this.registerForm.value.role==="Service provider"){
    //   this.router.navigateByUrl('/run_home',{replaceUrl:true});
    // }
    // if (this.registerForm.value.role==="Client"){
    //   this.router.navigateByUrl('/items',{replaceUrl:true});
    // }
    
    
  }
  }


  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      cell_no: ['', [Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(2), Validators.maxLength(10)]],
      password: ['', [Validators.required]],
    
    });
  }
}



function nextPage() {
  throw new Error('Function not implemented.');
}
   

