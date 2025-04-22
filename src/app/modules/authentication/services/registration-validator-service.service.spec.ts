import { TestBed } from '@angular/core/testing';

import { RegistrationValidatorServiceService } from './registration-validator-service.service';

describe('RegistrationValidatorServiceService', () => {
  let service: RegistrationValidatorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationValidatorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
