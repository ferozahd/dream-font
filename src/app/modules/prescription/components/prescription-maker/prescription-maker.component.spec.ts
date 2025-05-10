import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionMakerComponent } from './prescription-maker.component';

describe('PrescriptionMakerComponent', () => {
  let component: PrescriptionMakerComponent;
  let fixture: ComponentFixture<PrescriptionMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrescriptionMakerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriptionMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
