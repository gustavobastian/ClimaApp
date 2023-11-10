import { TestBed } from '@angular/core/testing';

import { GettingInfoService } from './getting-info.service';

describe('GettingInfoService', () => {
  let service: GettingInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GettingInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
