import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RunnerService {
  getRating(runner_id: any) {
    throw new Error('Method not implemented.');
  }



  constructor(private http:HttpClient) { }

  getTotal(runner_id:any):Observable<any>{
    return this.http.get<any>(`http://localhost:4304/api/total/${runner_id}`);
  }

  getTotalRating(runner_id:any):Observable<any>{
    return this.http.get<any>(`http://localhost:4304/api/totalRating/${runner_id}`);
  }

  getReviews(runner_id:any):Observable<any>{
    return this.http.get<any>(`http://localhost:4304/getReviews/$runner_id`);
  }

  acceptRequest(runner_id:any, id:any): Observable<any>{
    return this.http.put<any>(`http://localhost:4304/api/acceptRequest`,runner_id,id)
  }

}


