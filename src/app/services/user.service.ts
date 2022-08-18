import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../models/user.interface';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  URL = environment.Url;

  constructor(private httpClient: HttpClient) {}

  logIn(user: any) {
    return this.httpClient.post<{
      name: any;
      message: string;
      token: any;
      user: any;
    }>(`${this.URL}/api/user/users/login`, user);
  }

  editUser(user: any) {
    return this.httpClient.put<{ message: String; id: any; error: String }>(
      `${this.URL}/api/user/edit/${user._id}`,
      user
    );
  }

  getUser() {
    return this.httpClient.get<User[]>(this.URL);
  }

  postUser(trainer: User) {
    return this.httpClient.get<User[]>(this.URL);
  }

  getAllUsers() {
    return this.httpClient?.get<{ users: any; nbr: any }>(
      `${this.URL}/api/user/users`
    );
  }

  getUserById(id: any) {
    return this.httpClient?.get<{ user: any; message: String }>(
      `${this.URL}/api/user/users/${id}`
    );
  }

  getUserByEmail(email: any) {
    return this.httpClient?.get<{ user: any; message: String }>(
      `${this.URL}/api/user/email/${email}`
    );
  }

  deleteUser(id: any) {
    return this.httpClient?.delete<{ message: string }>(
      `${this.URL}/api/user/users/${id}`
    );
  }

  decryptPwd(pwd: any) {
    return this.httpClient?.post<{ message: string }>(
      `${this.URL}/api/user/decrypt/pwd`,
      pwd
    );
  }

  forgotPassword(data: any) {
    return this.httpClient.post<{ token: any }>(
      `${this.URL}/api/forgotPassword/forgot-password`,
      data
    );
  }

  resetPassoword(resetData: any) {
    return this.httpClient.post(
      `${this.URL}/api/resetPassword/reset-password`,
      resetData
    );
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
}
