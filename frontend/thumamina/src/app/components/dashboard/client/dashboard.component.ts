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



// admin deactivate clients by ID

getId(person)
{
  this.id=person.id;
  
  this.admin.deactivate(this.id).subscribe((res:any)=>{
    console.log(res);
    this.getClients();

  //A message that returns after the admin deactivated the account
    return Swal.fire({
      title: 'Success!',
      text: 'Successfully Deactivated',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
    
  }, (err) => {
    console.log(err)
  })
  
  
}


logOut()
{
  localStorage.clear();
  console.log('hi Zizi');
  
  localStorage.removeItem("")
}


  

}


