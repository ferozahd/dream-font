import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './components/portal/portal.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { KpiReportsComponent } from './components/kpi-reports/kpi-reports.component';
import { AppoitmentComponent } from './components/appoitment/appoitment.component';

const routes: Routes = [
  {
    path: "", component: PortalComponent,
    children: [
      { path: "dashboard/kpi", component: KpiReportsComponent },
      {path:"dashboard/appoitment",component:AppoitmentComponent},
      { path: "patients", component: PatientsListComponent },
      {
        path:'dr',
        loadChildren:()=> 
          import('../prescription/prescription.module').then(
            (m) => m.PrescriptionModule
          ),
      }
    ]
  },
{
  path: '**', redirectTo: 'dashboard/kpi'
}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
