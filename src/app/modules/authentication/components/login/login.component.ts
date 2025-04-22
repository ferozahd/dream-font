import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone:false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router
  ) {
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
    // Implement registration logic or navigation
    console.log('Register clicked');
  }
}
