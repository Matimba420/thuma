import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/interface/service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {


  constructor(private service:UserService, ) { }

    ngOnInit(): void {
    

     
    }
    getRequestsByClientid(){
      
    }
 
  }

  

