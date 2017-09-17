import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCheckModalComponent } from './confirm-check-modal.component';

describe('ConfirmCheckModalComponent', () => {
  let component: ConfirmCheckModalComponent;
  let fixture: ComponentFixture<ConfirmCheckModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmCheckModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmCheckModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
