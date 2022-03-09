import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnInit {

  constructor(private location: Location) { }
  
  back(): void {
    this.location.back()
    console.log("i'm clicked");
  }

  ngOnInit(): void {
  }

}
