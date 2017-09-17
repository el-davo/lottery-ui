import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTicketModalComponent } from './add-ticket-modal.component';

describe('AddTicketModalComponent', () => {
  let component: AddTicketModalComponent;
  let fixture: ComponentFixture<AddTicketModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTicketModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTicketModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
