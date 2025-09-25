import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalJourneyComponent } from './medical-journey.component';

describe('MedicalJourneyComponent', () => {
  let component: MedicalJourneyComponent;
  let fixture: ComponentFixture<MedicalJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalJourneyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
