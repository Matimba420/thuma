import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interface/user';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

clients:User[]=[];
runners:any=[];
numClients:any;
numRunners:any;

  constructor(private service:UserService, private admin: AdminService) { }
 
  ngOnInit(): void {
    this.getClients();
    
  }
  id: any;
  
  //admin getting all users that are registered as clients
getClients(){
  this.admin.getAllClients().subscribe((res:any)=>{
    console.log(res)
    this.clients=res;
    

  })
}

// this function views clients by ID


myFunction(person){
  console.log('hello');
  localStorage.setItem("clientId",person.id);
  console.log(localStorage.getItem("clientId"));
 
  
}


deactivate(person){
  Swal.fire({
    title: 'Are you sure you want to deactivate this user?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, deactivate  it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deactivated!',
        'Your user has been deactivated.',
        'success'
      )
      this.id=person.id;
      this.admin.deactivate(this.id).subscribe((res:any)=>{
            console.log(res);
             this.getClients();
          })
    }
  })
}

// deactivate(person)
// {
//   this.id=person.id;
  
//   this.admin.deactivate(this.id).subscribe((res:any)=>{
//     console.log(res);
//     this.getClients();
//     return Swal.fire({
//       title: 'Success!',
//       text: 'Successfully Deactivated',
//       icon: 'success',
//       confirmButtonText: 'Cool'
//     })
    
//   }, (err) => {
//     console.log(err)
//   })
  
  
// }


logOut()
{
  localStorage.clear();
  console.log('hi Zizi');
  
  localStorage.removeItem("")
}


  

}


