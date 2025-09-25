import { Component, inject } from '@angular/core';
import { PrescribableMedicine, PrescribableMedicineAsNeeded, PrescribableMedicineDosage, PrescribableMedicineDosageUnit, PrescribableMedicineFrequence, PrescribableMedicineFrequencyUnit, PrescribableMedicineTiming, PrescribableMedicineType } from '../../models/prescription.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prescription-maker',
  standalone:false,
  templateUrl: './prescription-maker.component.html',
  styleUrl: './prescription-maker.component.scss'
})
export class PrescriptionMakerComponent {

  private readonly route = inject(ActivatedRoute);

 
  newMedicine: PrescribableMedicine = new PrescribableMedicine();
  prescriptionList: PrescribableMedicine[] = [];

  PrescribableMedicineType = PrescribableMedicineType;
  PrescribableMedicineDosageUnit = PrescribableMedicineDosageUnit;
  PrescribableMedicineFrequencyUnit = PrescribableMedicineFrequencyUnit;
  PrescribableMedicineAsNeeded = PrescribableMedicineAsNeeded;
  PrescribableMedicineTiming = PrescribableMedicineTiming;

  addMedicine() {
    this.prescriptionList.push(JSON.parse(JSON.stringify(this.newMedicine)));
    this.newMedicine = new PrescribableMedicine(); // reset
  }
constructor(){
 
}
  submitPrescription() {
 
    console.log('Final Prescription:', this.prescriptionList);
    // TODO: Send to backend
  }
}