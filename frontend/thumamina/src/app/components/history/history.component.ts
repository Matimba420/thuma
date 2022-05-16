import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';
import { History } from 'src/app/interface/user';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
 

  items:History;
  reqs:History;
  
  client_id : any;
   today:Date;

   


  

  constructor(private service:HistoryService, private reqService:RequestsService) { }

    ngOnInit(): void {

      
      
  
      this.client_id=localStorage.getItem("clientID");
  
      this.pending();
      this.getHistory();
    }

    getId(item){
      
      console.log('Runner ID :' + item.runner_id);
      localStorage.setItem("runner_id", item.runner_id);
    }
    

    getHistory(){
      this.service.getHistory(this.client_id).subscribe((res=>{
        this.items=res;
        console.log(this.items)
        console.log(this.client_id);

      }))
    }


    pending(){
      this.reqService.pending(this.client_id).subscribe((res=>{
        this.reqs=res;
        console.log(this.reqs)
        console.log(this.client_id);

      }))
    }

  }
