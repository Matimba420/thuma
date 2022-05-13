import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  deactivate: any;

  constructor(private service: AdminService) { }

  numRunners: any;
  numClients: any;
  user: any;
  person: any;
  

  ngOnInit(): void {
    this.user=localStorage.getItem("user");
    console.log(localStorage.getItem("user")+ " is a user");
    
    this.getTotalRunners();
    this.getTotalClients();
    this.getRunnerReq();
  }

  getTotalRunners() {
    this.service.getTotallRunners().subscribe((res: any) => {
      this.numRunners = res;

    })
  }

  getTotalClients() {
    this.service.getTotallClients().subscribe((res: any) => {
      this.numClients = res;

    })
  }

  getRunnerReq() {
    this.service.getRunnerRequests().subscribe((res: any) => {
      this.person = res;
      console.log(this.person);

    })
  }

  deactivateUser(id: any) {

    this.deactivate.deactivateClient(id).subscribe({
      next: (res) => {

        this.getTotalClients()
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })


  }


  myFunction(person){
    Swal.fire({
      title: 'Are you sure you want to activate this user?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, activate  it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Activated!',
          'The user has been activated.',
          'success'
        )
        
        this.service.acceptRunner(person.id).subscribe((res:any)=>{
               console.log(res);
               this.getRunnerReq();
            })
      }
    })
  }


}
