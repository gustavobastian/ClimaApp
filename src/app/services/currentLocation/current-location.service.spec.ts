import { TestBed } from '@angular/core/testing';

import { CurrentLocationService } from './current-location.service';

describe('CurrentLocationService', () => {
  let service: CurrentLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
