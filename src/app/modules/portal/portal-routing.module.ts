import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './components/portal/portal.component';
import { KpiReportsComponent } from './components/kpi-reports/kpi-reports.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { DoctorChamberComponent } from './components/doctor-chamber/doctor-chamber.component';

const routes: Routes = [
  {
    path: "", component: PortalComponent,
    children: [
      { path: "kpi", component: KpiReportsComponent },
      { path: "patients", component: PatientsListComponent },
      { path: "chambers", component: DoctorChamberComponent },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
