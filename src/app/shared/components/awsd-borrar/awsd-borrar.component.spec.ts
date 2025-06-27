import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsdBorrarComponent } from './awsd-borrar.component';

describe('AwsdBorrarComponent', () => {
  let component: AwsdBorrarComponent;
  let fixture: ComponentFixture<AwsdBorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwsdBorrarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsdBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
