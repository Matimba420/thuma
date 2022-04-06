import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
// export class UppassPage implements OnInit {
//   password: any;
//   pswUpdate: any;

//   updateForm: any;

//   constructor(private formBuilder: FormBuilder, private service: UpdateService) { }

//   ngOnInit():void {
    
// this.updatePass();
//     this.password=this.formBuilder.group({
//       pwd:new FormControl()
//     })
//   };

//   updatePass(){
//     this.service.updatePass(this.password.value).subscribe(
//       (data: any) => {
//         this.pswUpdate = data.results;
//       }
//     )
//   }
// }

