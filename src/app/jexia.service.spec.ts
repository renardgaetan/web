import { TestBed } from '@angular/core/testing';

import { JexiaService } from './jexia.service';

describe('JexiaService', () => {
  let service: JexiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JexiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
