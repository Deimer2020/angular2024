import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosHijoComponent } from './empleados-hijo.component';

describe('EmpleadosHijoComponent', () => {
  let component: EmpleadosHijoComponent;
  let fixture: ComponentFixture<EmpleadosHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpleadosHijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
