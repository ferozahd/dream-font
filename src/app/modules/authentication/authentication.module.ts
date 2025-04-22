import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegistrationComponent } from './components/registration/registration.component';


export const authenticationRoutes: Routes = [
  { path: '', component: LoginComponent },
{ path: 'registration', component: RegistrationComponent },
];
@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }



@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(authenticationRoutes), // Import the routing module

  ],
  // exports: [LoginComponent], // Export LoginComponent if other modules need to use it
  // providers: [AuthenticationService], //Removed providedIn: 'root'
})
export class AuthenticationModule { }



