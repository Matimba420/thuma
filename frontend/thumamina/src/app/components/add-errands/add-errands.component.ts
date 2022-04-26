import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/jobs.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-errands',
  templateUrl: './add-errands.component.html',
  styleUrls: ['./add-errands.component.css']
})
export class AddErrandsComponent implements OnInit {
 
  id:any;

form!:any


  constructor( private service:JobsService) { }

  ngOnInit(): void {

  


   
  }

  



  alertWithSuccess(){
    Swal.fire('Thank you admin', 'Errands Successfully Added!', 'success')
  };

 
   

}
