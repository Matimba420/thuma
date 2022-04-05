import { Injectable } from '@angular/core';
import { Service } from '../interface/service';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrandsService {

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:4304/api/services/';

getService(service:Service):Observable<any>{
  return this.http.get<any>(`${this.baseUrl}`);
}

}
