import { TestBed } from '@angular/core/testing';

import { APIservicioService } from './apiservicio.service';

describe('APIservicioService', () => {
  let service: APIservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
