import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { Update, User,login, edit } from '../interface/user';
=======
import { login, User } from '../interface/user';
>>>>>>> cf00f1ce0106862329e181694d0b45d023e715d8

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:4304/api/clients/';

  constructor(private http:HttpClient) { }


  //create a user
  addUser(user:User):Observable<any>{
    return this.http.post<any>(`${this,this.baseUrl}`, user);
  
  }

  addRunner(user:User):Observable<any>{
    return this.http.post<any>(`http://localhost:4304/api/runner`, user);
  
  }

//read user
  getUsers(): Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }


//read user by id
  getUser(id: any): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`)
  }
  //update
  updateUser(user: Date, id: Date): Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/${id}`, user)
  }

  userLogin(login: login): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}login`, login)
    
  }

  removeUserById(id:User):Observable<any>{
    return this.http.delete<any[]>(`${this.baseUrl}${id}`);
  }

}


