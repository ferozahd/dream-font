import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientContainerComponent } from './components/patient-container/patient-container.component';
import { SearchDoctorComponent } from './components/search-doctor/search-doctor.component';
import { MedicalJourneyComponent } from './components/medical-journey/medical-journey.component';


const routes: Routes = [  
  {path:'',component:PatientContainerComponent,
    children:[  
      {path:'search-doctor', component:SearchDoctorComponent},
      {path:'medical-journey',component:MedicalJourneyComponent},
      {path:'**', redirectTo:'search-doctor'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
