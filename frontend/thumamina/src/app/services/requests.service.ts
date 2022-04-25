import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class RequestsService {

  private baseUrl = 'http://localhost:4304/api/requests';

  constructor(private http:HttpClient) { }

getRequests():Observable<any> {
return this.http.get<any>(`${this.baseUrl}`)
}

accept(runner_id:any):Observable<any>{
  return this.http.put<any>('http://localhost:4304/api/acceptRequest/', runner_id);

}





}
