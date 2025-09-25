import { Component, computed, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-appoitment',
  standalone: false,
  templateUrl: './appoitment.component.html',
  styleUrl: './appoitment.component.scss'
})
export class AppoitmentComponent {
onSelectChange($event: Event) {
throw new Error('Method not implemented.');
}

    public status =signal<"PENDING"|"ACTIVE"|"ALL">("ALL");
    patients = signal<any>([
      {
        id: 1,
        name: 'John Doe',
        age: 29,
        gender: 'Male',
        disease: 'Flu',
        dateOfAdmission: '2025-09-20'
      }, 
      {
        id: 2,
        name: 'Jane Smith',
        age: 35,
        gender: 'Female',
        disease: 'COVID-19',
        dateOfAdmission: '2025-09-18'
      },
      {
        id: 3,
        name: 'Alex Brown',
        age: 42,
        gender: 'Male',
        disease: 'Pneumonia',
        dateOfAdmission: '2025-09-15'
      }
    ]);
  
    // Computed to get the total count of patients
    patientCount :Signal<number>= computed(() => this.patients().length);


   public change_filter_status(status: "PENDING"|"ACTIVE"|"ALL"):void { 
      this.status.set(status);
    }
}