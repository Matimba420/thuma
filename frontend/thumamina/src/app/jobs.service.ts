import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:4304/api/requests/runner';

getJobs(runner_id:any):Observable<any>{

  return this.http.get<any>(`${this.baseUrl}/${runner_id}`);
}

updateStatus(errand:any):Observable<any>{
return this.http.put<any>('http://localhost:4304/api/updateStatus/'+ errand.id, errand);
}

getRequest(client_id:any):Observable<any>{

  return this.http.get<any>('http://localhost:4304/api/requests/client/' + client_id, client_id);
}


}
