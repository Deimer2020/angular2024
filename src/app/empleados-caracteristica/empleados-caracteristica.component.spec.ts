import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosCaracteristicaComponent } from './empleados-caracteristica.component';

describe('EmpleadosCaracteristicaComponent', () => {
  let component: EmpleadosCaracteristicaComponent;
  let fixture: ComponentFixture<EmpleadosCaracteristicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpleadosCaracteristicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosCaracteristicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
