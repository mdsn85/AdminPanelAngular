import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient
    ,private  router: Router) { }

  login(data){
      return this.http.post(`${environment.api}/user/login`,data);
  }

  register(data){
    return this.http.post(`${environment.api}/user/register`,data);
  }

  AcceptUser(data){
    console.log('data:'+data);
    return this.http.post(`${environment.api}/user/AcceptUser?id=${data}`,{});
  }
  RejectUser(data){
    return this.http.post(`${environment.api}/user/RejectUser?id=${data}`,data);
  }

  //Function to access the token stored in the local storage
  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  //Function to logout user, remove the access token from local storage and redirects the user to login page
  logout() {
    if (localStorage.removeItem('access_token') == null) {
      this.router.navigate(['/login']);
    }
  }

  getUserProfile(id) {
    return this.http.get(`${environment.api}/user/GetUser`);
  }

  usersList(){
    return this.http.get(`${environment.api}/user/users`);
  }

  // Function to check user is logged in OR not
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
    }
}
