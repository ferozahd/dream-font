import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './components/portal/portal.component';
import { KpiReportsComponent } from './components/kpi-reports/kpi-reports.component';

const routes: Routes = [
  {
    path: "", component: PortalComponent,
    children: [{ path: "kpi", component: KpiReportsComponent }]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
