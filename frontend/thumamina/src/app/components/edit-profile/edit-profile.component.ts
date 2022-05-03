import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder ,FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class editProfileComponent implements OnInit {
  id: any;
  user: any;
  userP:any=[];
  
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    cell_no: new FormControl(''),
   password: new FormControl('')
  });

  constructor(private service:UserService,  private router:Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = localStorage.getItem("clientID");
    this.user = localStorage.getItem("access");
    console.log(this.user);
    
   // this.update(this.id);
    throw new Error('Method not implemented.');
  }
  

  update(id:any){
    let data = this.form.value;
    id = this.id;
    this.service.updateUser(data,id).subscribe(res =>{
      console.log(res);
    })

    this.userP=JSON.parse(localStorage.getItem("access")).role;
    console.log(this.userP);

    if(this.userP === 'Client'){
      this.router.navigateByUrl('/errands', {replaceUrl:true});

    }
    else if(this.userP === 'Service provider'){
      this.router.navigateByUrl('/run_home', {replaceUrl:true});
    }
    return Swal.fire({
      title: 'Success!',
      text: 'Successfully Updated',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
    

}
}