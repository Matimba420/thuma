import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HistoryService { 
  
  private baseUrl = 'http://localhost:4304/api/requests/client';

  constructor(private http:HttpClient) { }

getHistory(client_id:any):Observable<any>{
  return this.http.get<any>(`${this.baseUrl}/` +client_id)
}
}
