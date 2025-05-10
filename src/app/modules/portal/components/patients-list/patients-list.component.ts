import { Component, inject, OnInit } from '@angular/core';
import { PatientService } from '../../../patient/services/patient.service';
import { Patient } from '../../models/patient.model';

@Component({
  selector: 'app-patients-list',
  standalone: false,
  templateUrl: './patients-list.component.html',
  styleUrl: './patients-list.component.scss'
})
export class PatientsListComponent implements OnInit {

  private readonly patientService =inject(PatientService);
  public users:Patient[] =[];

  ngOnInit(): void {
    this.patientService.getAllPatientsList().subscribe((users:Patient[])=>{
      this.users=users;
    })
  }
}
