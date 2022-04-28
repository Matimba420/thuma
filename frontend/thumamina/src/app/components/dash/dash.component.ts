import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';


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

  person: any;

  ngOnInit(): void {
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

  // deactivateUser(id: any) {

  //   this.deactivate.deactivateClient(id).subscribe({
  //     next: (res) => {

  //       this.getAllClient()
  //       console.log(res)
  //     },
  //     error: (err) => {
  //       console.log(err)
  //     }
  //   })


  // }



}
