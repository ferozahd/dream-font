import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientService } from './services/patient.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    PatientService
  ]
})
export class PatientModule { }
