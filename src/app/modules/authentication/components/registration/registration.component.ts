import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistrationValidatorService } from '../../services/registration-validator-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  useGuardian = false;
  private fb = inject(FormBuilder);
  private validators = inject(RegistrationValidatorService);
  private modalService =inject(NgbModal);
  readonly relationships = ['Father', 'Mother'];
  readonly religions = ['Islam', 'Hindu', 'Buddhist', 'Christian'];
  readonly maritalStatuses = ['Married', 'Unmarried', 'Divorce', 'In a relationship'];

  registrationForm = this.fb.group({
    name: ['', [Validators.required, this.validators.nameValidator()]],
    email: ['', [Validators.required, this.validators.emailValidator()]],
    phone: ['', [Validators.required, this.validators.phoneValidator()]],
    nid: ['', [this.validators.nidValidator()]],
    guardian: this.fb.group({
      name: [''],
      nid: [''],
      relationship: ['']
    }),
    dob: ['', Validators.required],
    religion: [''],
    address: ['', [Validators.required, Validators.maxLength(100)]],
    city: ['', [Validators.required, Validators.maxLength(50)]],
    post: ['', [Validators.required, Validators.maxLength(30)]],
    postcode: ['', [Validators.required, this.validators.postalCodeValidator()]],
    weight: ['', [Validators.required, Validators.max(1000)]],
    height: ['', [Validators.required, Validators.max(300)]],
    maritalStatus: ['', Validators.required],
    brothers: ['', [Validators.required, Validators.max(100)]],
    sisters: ['', [Validators.required, Validators.max(100)]],
    father: ['', [Validators.required, this.validators.nameValidator()]],
    mother: ['', [Validators.required, this.validators.nameValidator()]]
  });

  toggleGuardianNID() {
    this.useGuardian = !this.useGuardian;
    const guardian = this.registrationForm.get('guardian');

    if (this.useGuardian) {
      this.registrationForm.get('nid')?.clearValidators();
      guardian?.get('name')?.setValidators([Validators.required, this.validators.nameValidator()]);
      guardian?.get('nid')?.setValidators([Validators.required]);
      guardian?.get('relationship')?.setValidators([Validators.required]);
    } else {
      this.registrationForm.get('nid')?.setValidators([Validators.required]);
      guardian?.get('name')?.clearValidators();
      guardian?.get('nid')?.clearValidators();
      guardian?.get('relationship')?.clearValidators();
    }

    this.registrationForm.get('nid')?.updateValueAndValidity();
    guardian?.get('name')?.updateValueAndValidity();
    guardian?.get('nid')?.updateValueAndValidity();
    guardian?.get('relationship')?.updateValueAndValidity();
  }

  public onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log("Form Submitted", this.registrationForm.value);
    } else {
      console.warn("Form is invalid");
      this.registrationForm.markAllAsTouched();
    }
  }

  @Input() showModal = false;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

  openModal(content: any ) {
    this.modalService.open(content, { size: 'lg', backdrop: 'static' });
  }
 
}
