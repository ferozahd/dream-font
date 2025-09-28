import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeEditorComponent } from './notice-editor.component';

describe('NoticeEditorComponent', () => {
  let component: NoticeEditorComponent;
  let fixture: ComponentFixture<NoticeEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticeEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
