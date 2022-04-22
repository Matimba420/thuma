import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  RequestResetForm:any= FormGroup;
  forbiddenEmails: any;
  errorMessage: string | undefined;
  successMessage: string | undefined;
  IsvalidForm = true;

  constructor() { }

  ngOnInit(): void {

    this.RequestResetForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
    });
  }


  RequestResetUser(form: { valid: any; }) {
  //   console.log(form)
  //   if (form.valid) {
  //     this.IsvalidForm = true;
  //     this.authService.requestReset(this.RequestResetForm.value).subscribe(
  //       data => {
  //         this.RequestResetForm.reset();
  //         this.successMessage = "Reset password link send to email sucessfully.";
  //         setTimeout(() => {
  //           this.successMessage = null;
  //           this.router.navigate(['sign-in']);
  //         }, 3000);
  //       },
  //       err => {

  //         if (err.error.message) {
  //           this.errorMessage = err.error.message;
  //         }
  //       }
  //     );
  //   } else {
  //     this.IsvalidForm = false;
  //   }
  }
}


