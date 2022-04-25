import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingsService {


  private baseUrl = 'http://localhost:4304/api/getReviews/';
  constructor(private http:HttpClient) { }

getRatings(runner_id:any):Observable<any>{
  return this.http.get<any>(`${this.baseUrl}${runner_id}`)
}

}
