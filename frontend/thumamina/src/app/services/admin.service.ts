import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  

  constructor(private http:HttpClient) { }




  private baseUrl='http://localhost:4304/api/runner';


  

  viewClients():Observable<any>{

    return this.http.get<any>(`${this.baseUrl}`);
  }


  getAllRunners():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`);
  }

  getAllClients():Observable<any>{
    return this.http.get<any>(`http://localhost:4304/api/client`);
  }


  getTotallRunners():Observable<any>{
    return this.http.get<any>(`http://localhost:4304/api/totalRunners`);
  }

  getTotallClients():Observable<any>{
    return this.http.get<any>(`http://localhost:4304/api/totalClients`);
  }

  getRunnerRequests():Observable<any>{
    return this.http.get<any>(`http://localhost:4304/api/runnerRequests`);
    
  }

  deactivate(id:any):Observable<any>{
    return this.http.put<any>('http://localhost:4304/api/deactivate/'+id, {id: id});
    
  }
  
  
  addService(errand):Observable<any>{
    return this.http.post<any>(`http://localhost:4304/api/services`, errand);
  }

  getUserById(id:any):Observable<any>{
    return this.http.get<any>(`http://localhost:4304/api/clients/` + id, id);
  }

  acceptRunner(id:any):Observable<any>{
    return this.http.put<any>('http://localhost:4304/api/runner/'+ id, {id: id});
  }

  deleteErrand(id:any):Observable<any>{
    return this.http.delete<any>('http://localhost:4304/api/services/'+id);
  }

}


