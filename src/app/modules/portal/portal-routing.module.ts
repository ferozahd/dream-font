import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './components/portal/portal.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { KpiReportsComponent } from './components/kpi-reports/kpi-reports.component';
import { AppoitmentComponent } from './components/appoitment/appoitment.component';
import { PrescriptionPortalComponent } from './components/prescription-portal/prescription-portal.component';

const routes: Routes = [
  {
    path: "", component: PortalComponent,
    children: [
      { path: "dashboard/kpi", component: KpiReportsComponent },
      {path:"dashboard/appoitment",component:AppoitmentComponent},
      { path: "patients", component: PatientsListComponent },
      {path:"prescription",component:PrescriptionPortalComponent},
      {
        path: '**',pathMatch:'full', redirectTo: 'dashboard/kpi'
      }
    ]
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
