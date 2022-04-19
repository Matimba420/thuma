import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{earnings}from'../interface/user';




@Injectable({
  providedIn: 'root'
})
export class EarningsService {

  private baseUrl = 'http://localhost:4304/api/earnings';

  constructor(private http:HttpClient){}



  getEarnings(id:any):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${id}`)
  
  
}

  }



