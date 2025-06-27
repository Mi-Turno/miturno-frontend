import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferedServiceComponent } from './offered-service.component';

describe('OfferedServiceComponent', () => {
  let component: OfferedServiceComponent;
  let fixture: ComponentFixture<OfferedServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferedServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferedServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
