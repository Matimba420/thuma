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
  id: any;
  user: any;

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    cell_no: new FormControl(''),
   password: new FormControl('')
  });

  constructor(private service:UserService ) { }

  ngOnInit(): void {
    this.id = localStorage.getItem("clientID");
    this.user = localStorage.getItem("access");
    console.log(this.user);
    
    this.update(this.id);
    throw new Error('Method not implemented.');
  }
  

  update(id:any){
    let data = this.form.value;
    id = this.id;
    this.service.updateUser(data,id).subscribe(res =>{
      console.log(res);
    })

}
}