import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.css']
})
export class Nav2Component implements OnInit {
  isAuthenticated: boolean;
  token: any;
  authStatusListener: any;
  authService: any;

  constructor() { }

  ngOnInit(): void {
    
  }
  onLogout(){  
    this.token = null;  
    this.isAuthenticated = false; 
    this.authStatusListener.next(false);  

    this.authService.logout();  

      
  } 
}
