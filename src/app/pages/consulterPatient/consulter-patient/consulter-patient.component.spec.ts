import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterPatientComponent } from './consulter-patient.component';

describe('ConsulterPatientComponent', () => {
  let component: ConsulterPatientComponent;
  let fixture: ComponentFixture<ConsulterPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
