import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonymousDashboardComponent } from './anonymous-dashboard.component';

describe('AnonymousDashboardComponent', () => {
  let component: AnonymousDashboardComponent;
  let fixture: ComponentFixture<AnonymousDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnonymousDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnonymousDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
