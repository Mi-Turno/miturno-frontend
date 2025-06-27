import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeAppointmentModalComponent } from './charge-appointment-modal.component';

describe('ChargeAppointmentModalComponent', () => {
  let component: ChargeAppointmentModalComponent;
  let fixture: ComponentFixture<ChargeAppointmentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChargeAppointmentModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChargeAppointmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
