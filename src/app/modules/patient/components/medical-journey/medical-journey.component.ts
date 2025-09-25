import { Component } from '@angular/core';

@Component({
  selector: 'app-medical-journey',
 standalone:false,
  templateUrl: './medical-journey.component.html',
  styleUrl: './medical-journey.component.scss'
})
export class MedicalJourneyComponent {

 
  combinedHistory = [
    // Combined data for both doctor appointments and test history
    { date: '2023-09-25', name: 'Dr. Smith', details: 'Cardiologist Appointment at 10:00 AM', type: 'doctor' },
    { date: '2023-09-25', name: 'Dr. Smith', details: 'Cardiologist Appointment at 02:00 PM', type: 'doctor' },
    { date: '2023-09-24', name: 'Blood Test', details: 'Normal', type: 'test' },
    { date: '2023-09-24', name: 'X-Ray', details: 'Clear', type: 'test' },
    { date: '2023-09-25', name: 'Dr. Smith', details: 'Cardiologist Appointment at 10:00 AM', type: 'doctor' },
    { date: '2023-09-25', name: 'Dr. Smith', details: 'Cardiologist Appointment at 02:00 PM', type: 'doctor' },
    { date: '2023-09-24', name: 'Blood Test', details: 'Normal', type: 'test' },
    { date: '2023-09-24', name: 'X-Ray', details: 'Clear', type: 'test' },
    { date: '2023-09-25', name: 'Dr. Smith', details: 'Cardiologist Appointment at 10:00 AM', type: 'doctor' },
    { date: '2023-09-25', name: 'Dr. Smith', details: 'Cardiologist Appointment at 02:00 PM', type: 'doctor' },
    { date: '2023-09-24', name: 'Blood Test', details: 'Normal', type: 'test' },
    { date: '2023-09-24', name: 'X-Ray', details: 'Clear', type: 'test' },
    { date: '2023-09-25', name: 'Dr. Smith', details: 'Cardiologist Appointment at 10:00 AM', type: 'doctor' },
    { date: '2023-09-25', name: 'Dr. Smith', details: 'Cardiologist Appointment at 02:00 PM', type: 'doctor' },
    { date: '2023-09-24', name: 'Blood Test', details: 'Normal', type: 'test' },
    { date: '2023-09-24', name: 'X-Ray', details: 'Clear', type: 'test' }



  ];

  filteredHistory = [...this.combinedHistory];


  public onSelectChange($event: Event):void {
    const selectElement =( $event.target as HTMLSelectElement).value;
    console.log(selectElement);
    if(selectElement==='ALL'){
      this.filteredHistory = [...this.combinedHistory];
    }else{
      this.filteredHistory = this.combinedHistory.filter(item=>item.type===selectElement.toLocaleLowerCase());
    }
  }
 
  isFirstEventOfDay(event: any): boolean {
    const sameDayEvents = this.filteredHistory.filter(item => item.date === event.date);
    return sameDayEvents.indexOf(event) === 0;
  }
}
