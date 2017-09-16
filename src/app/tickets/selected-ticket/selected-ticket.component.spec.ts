import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTicketComponent } from './selected-ticket.component';

describe('SelectedTicketComponent', () => {
  let component: SelectedTicketComponent;
  let fixture: ComponentFixture<SelectedTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
