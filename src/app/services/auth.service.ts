import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data){
      return this.http.post(`${environment.api}/login`,data);
  }

  register(data){
    return this.http.post(`${environment.api}/register`,data);
  }

  user(){
    return this.http.get(`${environment.api}/user`,{withCredentials:true});
  }

  logout(){
    return this.http.post(`${environment.api}/logout`,{},{withCredentials:true});
  }
}
