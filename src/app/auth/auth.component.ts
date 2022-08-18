import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  loginForm = this.formBuilder.group({
    username: '',
    password: '',
  });

  loading = false;

  constructor(
              private formBuilder: FormBuilder,
              private auth: AuthService
              ) {}

  ngOnInit(): void {
    
  }

  submit() {
    if (this.loading) {
      return;
    }

    this.loading = true;

    const user = this.loginForm.value;

    this.auth
      .login(user)
     
  }
}
