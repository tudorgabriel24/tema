import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApartmentDialogComponent } from './add-apartment-dialog.component';

describe('AddApartmentDialogComponent', () => {
  let component: AddApartmentDialogComponent;
  let fixture: ComponentFixture<AddApartmentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddApartmentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddApartmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
