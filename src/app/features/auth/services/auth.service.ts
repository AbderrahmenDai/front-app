import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export interface TokenResponse {
  access_token: string;
  refresh_token: string;
}

export interface User {
  _id: string;
  username: string;
  password: string;
  email: string;
  online: boolean;
}


const api = 'localhost/3000';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(user: Partial<User>) {
    return this.http.post<TokenResponse>(`${api}/auth/login`, user);
  }

  getLoginCallbackUrl() {
    return localStorage.getItem('loginCallbackUrl');
  }

  setLoginCallbackUrl(url: string) {
    localStorage.setItem('loginCallbackUrl', url);
  }

  async redirectToCallback() {
    const output = await this.router.navigate([
      this.getLoginCallbackUrl() || '/',
    ]);

    this.setLoginCallbackUrl('any');

    return output;
  }
}
