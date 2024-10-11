import { TestBed } from '@angular/core/testing';

import { EmpleadosServicios2Service } from './empleados-servicios2.service';

describe('EmpleadosServicios2Service', () => {
  let service: EmpleadosServicios2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadosServicios2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
