import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';
import { History } from 'src/app/interface/user';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {


  item:History;
  
  id : any;
   today:Date;



  constructor(private service:HistoryService) { }

    ngOnInit(): void {

      this.getHistory();
      const now= new Date();
      console.log(now.toLocaleDateString());
      this.id=localStorage.getItem("clientID");
    }

    

    getHistory(){
      this.service.getHistory(this.id).subscribe((res=>{
        this.item=res;
        console.log(this.item)
      }))
    }
  }

  

  


