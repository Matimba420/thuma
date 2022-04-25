import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashService {

  private baseUrl = 'http://localhost:4304/api//totalClients'

  constructor(private http:HttpClient) { }

  getClients():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`);
  }

  getRunners():Observable<any>{
    return this.http.get<any>('http://localhost:4304/api//totalClients');
  }

}
