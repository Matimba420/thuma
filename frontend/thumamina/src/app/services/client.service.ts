import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';


const baseURL = environment.baseUrl;


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`/user`);
}

register(user: User) {
  return this.http.post(`${baseURL}/user/register`, user);
}

login(_user: User) {
  return this.http.post(`${baseURL}/user/login`, User);

  
}


}
