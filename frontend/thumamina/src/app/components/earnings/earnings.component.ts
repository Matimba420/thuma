import { Component, OnInit } from '@angular/core';
import { earnings } from 'src/app/interface/user';
import { EarningsService } from 'src/app/services/earnings.service';


@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.component.html',
  styleUrls: ['./earnings.component.css']
})
export class EarningsComponent implements OnInit {

  runner_id:any;
  total:any;
  earnings:earnings[] = [
  

  ]
  constructor(private service:EarningsService, ) { }



  ngOnInit(): void {
     
    this.runner_id=localStorage.getItem("runnerID");
    this.getEarnings();
    
    this.total=this.getTotal();
  }


  getEarnings(){
    this.service.getEarnings(this.runner_id).subscribe((res=>{
      this.earnings = res;
      
      
      
     // console.log(this.earnings)
    }));
  }

  getTotal(){
    this.service.getTotal(this.runner_id).subscribe((res=>{
     
     this.total = res[0].total;
    }))
  }

}
