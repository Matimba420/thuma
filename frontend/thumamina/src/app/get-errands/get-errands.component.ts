import { Component, OnInit } from '@angular/core';
import { Service } from '../interface/service';
import { ErrandsService } from '../services/errands.service';
import { AdminService } from '../services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-errands',
  templateUrl: './get-errands.component.html',
  styleUrls: ['./get-errands.component.css']
})
export class GetErrandsComponent implements OnInit {

  items: Service[] = [
  

  ];

  id:any;
  constructor(private errandService:ErrandsService, private service:AdminService) { }

  ngOnInit(): void {
    this.getService();
  }


  getService(){
    this.errandService.getService().subscribe((res:any)=>{
      console.log(res);
      this.items = res;

      
      
    });
  }

  deleteService(item){

    this.id=item.id;
    this.service.deleteErrand(this.id).subscribe((res:any)=>{
      console.log(res);
      this.getService()
      return Swal.fire({
        title: 'Success!',
        text: 'Successfully Deleted',
        icon: 'success',
        confirmButtonText: 'Ok'
        
      })
      
    });
 
    
    
  }

  
 
}
