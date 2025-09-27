import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './components/portal/portal.component';
import { NgbAccordionModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChartComponent } from './components/kpi-reports/chart/chart.component';
import { KpiReportsComponent } from './components/kpi-reports/kpi-reports.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { PatientModule } from '../patient/patient.module';
import { FormsModule } from '@angular/forms'; 
import { PrescriptionPortalComponent } from './components/prescription-portal/prescription-portal.component';
  
 
@NgModule({
  declarations: [
    PrescriptionPortalComponent,
    KpiReportsComponent,
    PortalComponent, 
    KpiReportsComponent ,
    ChartComponent,
    PatientsListComponent,
   ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    NgbAccordionModule,
    PatientModule,
    FormsModule,
    NgbCollapseModule
],schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortalModule { }
