import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder ,FormControl} from '@angular/forms';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class editProfileComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    cell_no: new FormControl(''),
   email: new FormControl(''),
   
    
  });

  constructor(private service:UserService ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // update(){
  //   this.service.updateUser(this.form[].id).subscribe((res:any)=>{
  //     console.log(res)
      
  //   }
  //   )




  // ngOnInit(): void {
  // }

}