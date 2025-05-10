import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-kpi-reports',
  standalone: false,
  templateUrl: './kpi-reports.component.html',
  styleUrl: './kpi-reports.component.scss'
})
export class KpiReportsComponent {
    kpis = [
      { title: 'Total Patients Today', value: 52, chart: [12, 18, 15, 22, 52] },
      { title: 'Total Appointments Today', value: 34, chart: [10, 20, 30, 25, 34] },
      { title: 'Active Patients', value: 210, chart: [150, 160, 170, 190, 210] },
      { title: 'New Patients This Month', value: 18, chart: [2, 4, 6, 12, 18] },
      { title: 'Appointment Growth Rate', value: '12.4%', unit: 'vs last month', chart: [3, 4, 6, 10, 12.4] },
      { title: 'Revenue Today', value: '৳ 25,500', chart: [8000, 12000, 15000, 22000, 25500] }
    ];
}