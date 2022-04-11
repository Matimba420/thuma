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


  People: Update[]=[

    // {
    //     name: " mown lawning ",
    //     surname: "  The runner will go shopping on your behalf",
    //     cell_no: 0,
    //     email: "fs"
    //   }
  ];
  ngOnInit(): void {
    this.getUser
   
  }

  getUser(id:any){
    this.service.getUser(id).subscribe(res=>{
      this.People=res;
    
      
    });

}


