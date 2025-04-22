import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone:false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly fb =inject(FormBuilder);
  private readonly router =inject(Router);
  loginForm: FormGroup;

  constructor() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  onLogin() {
    const { username, password } = this.loginForm.value;

    // Simulate authentication
    if (username === 'admin' && password === 'admin') {
      this.router.navigate(['/dashboard']);
    } else {
     
    }
  }

  onRegister() {
   this.router.navigate(["login/registration"])
  }
}
