import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnonymousRoutingUserModule } from './anonymous-routing-user.module';
import { AnonymousDashboardComponent } from './components/anonymous-dashboard/anonymous-dashboard.component';
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    AnonymousDashboardComponent
  ],
  imports: [
    AnonymousRoutingUserModule,
    CommonModule,
    FormsModule
]
})
export class AnonymousUserModule { }
