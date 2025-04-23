import { Component } from '@angular/core';

@Component({
  selector: 'app-kpi-reports',
  standalone: false,
  templateUrl: './kpi-reports.component.html',
  styleUrl: './kpi-reports.component.scss'
})
export class KpiReportsComponent {
  kpis = [
    { title: 'Total Patients Today', value: 52 },
    { title: 'Total Appointments Today', value: 34 },
    { title: 'Active Patients', value: 210 },
    { title: 'New Patients This Month', value: 18 },
    { title: 'Appointment Growth Rate', value: '12.4%', unit: 'vs last month' },
    { title: 'Revenue Today', value: '৳ 25,500' }
  ];
}
