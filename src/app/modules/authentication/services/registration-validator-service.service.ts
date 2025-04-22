import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class RegistrationValidatorService {

  emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(control.value) ? null : { invalidEmail: true };
    };
  }

  phoneValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const regex = /^01[3-9]\d{8}$/;
      return regex.test(control.value) ? null : { invalidPhone: true };
    };
  }

  nameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const regex = /^[A-Za-z\s]{1,100}$/;
      const spaceCount = (control.value?.match(/\s/g) || []).length;
      if (!regex.test(control.value) || spaceCount > 5) {
        return { invalidName: true };
      }
      return null;
    };
  }

  nidValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value?.replace(/\s/g, '');
      const regex = /^\d{10,17}$/;
      return regex.test(value) ? null : { invalidNid: true };
    };
  }

  bpValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const regex = /^(0|[1-9][0-9]{0,2})\/(0|[1-9][0-9]{0,2})$/;
      if (!regex.test(control.value)) {
        return { invalidBp: true };
      }

      const [systolic, diastolic] = control.value.split('/').map(Number);
      if (systolic > 260 || diastolic > 260) {
        return { invalidBp: true };
      }

      return null;
    };
  }

  postalCodeValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return /^\d{5}$/.test(control.value) ? null : { invalidPostCode: true };
    };
  }
}
