import { Component, OnInit } from '@angular/core';
import { Update} from 'src/app/interface/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service:UserService) { }

  id : any;
  People: Update[]=[

    
  ];
  ngOnInit(): void {
    this.id=localStorage.getItem("clientID");
   this.getUser(this.id);
   
  }

  getUser(id:any){
    this.service.getUser(id).subscribe(res=>{
      this.People=res;
      console.log(this.People);
      
    
      
    });

}
}


