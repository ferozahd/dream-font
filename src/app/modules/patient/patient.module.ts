import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientService } from './services/patient.service';
import { PatientRoutingModule } from './patient-routing.module';
import { PatientContainerComponent } from './components/patient-container/patient-container.component';
import { SearchDoctorComponent } from './components/search-doctor/search-doctor.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MedicalJourneyComponent } from './components/medical-journey/medical-journey.component';



@NgModule({
  declarations: [
    MedicalJourneyComponent,  
    PatientContainerComponent,
    SearchDoctorComponent
  ],
  imports: [
    PatientRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers:[
    PatientService
  ]
})
export class PatientModule { }
