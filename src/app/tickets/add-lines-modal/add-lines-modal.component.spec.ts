import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLinesModalComponent } from './add-lines-modal.component';

describe('AddLinesModalComponent', () => {
  let component: AddLinesModalComponent;
  let fixture: ComponentFixture<AddLinesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLinesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLinesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
