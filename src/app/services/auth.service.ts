import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL =  environment.Url
  constructor(private http: HttpClient) { }

  test(){
    return ("done");
  }

  login(login: Login){ 
    return this.http.post(this.URL, login);
      }
    }
