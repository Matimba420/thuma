import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User, address } from '../interface/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private baseUrl = 'http://localhost:4304/api/address/';

  constructor(private http:HttpClient) { }

  getAddress(address:address):Observable<any>{

    return this.http.post<any>(`${this.baseUrl}`,address);
  }
  
  }

