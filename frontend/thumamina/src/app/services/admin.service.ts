import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl='http://localhost:4304/api/runners'

  constructor(private http:HttpClient) { }

  viewClients():Observable<any>{

    return this.http.get<any>(`${this.baseUrl}`);
  }

  

}


