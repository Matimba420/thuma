import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User, address, request } from '../interface/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private baseUrl = 'http://localhost:4304/api/address';

  constructor(private http:HttpClient) { }

  getAddress(address:address):Observable<any>{

    return this.http.post<any>(`${this.baseUrl}`,address);
  }
  addRequest(request:request){
    return this.http.post<any>('http://localhost:4304/api/requests', request);

  }

  getMaxId(client_id:any):Observable<any>{
    return this.http.get<any>(`http://localhost:4304/api/maxId/${client_id}`);
  }


  addComment(comData:any){
    return this.http.put<any>('http://localhost:4304/api/requests/' + comData.id, comData);
  }
}
  

