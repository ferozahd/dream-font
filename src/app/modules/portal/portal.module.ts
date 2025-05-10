import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './components/portal/portal.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChartComponent } from './components/kpi-reports/chart/chart.component';
import { KpiReportsComponent } from './components/kpi-reports/kpi-reports.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { PatientModule } from '../patient/patient.module';
import { FormsModule } from '@angular/forms'; 
import { DoctorChamberComponent } from './components/doctor-chamber/doctor-chamber.component';


@NgModule({
  declarations: [
    PortalComponent,
    SidebarMenuComponent,
    KpiReportsComponent ,
    ChartComponent,
    PatientsListComponent,
    DoctorChamberComponent
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    NgbAccordionModule,
    PatientModule,
    FormsModule, 
],schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortalModule { }
