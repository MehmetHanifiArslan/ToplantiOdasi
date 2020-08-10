import { TestBed } from '@angular/core/testing';

import { ToplantiodasiService } from './toplantiodasi.service';

describe('ToplantiodasiService', () => {
  let service: ToplantiodasiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToplantiodasiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
