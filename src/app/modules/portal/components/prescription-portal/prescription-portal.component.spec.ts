import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionPortalComponent } from './prescription-portal.component';

describe('PrescriptionPortalComponent', () => {
  let component: PrescriptionPortalComponent;
  let fixture: ComponentFixture<PrescriptionPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrescriptionPortalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriptionPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
