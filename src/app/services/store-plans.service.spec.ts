import { TestBed } from '@angular/core/testing';

import { StorePlansService } from './store-plans.service';

describe('StorePlansService', () => {
  let service: StorePlansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorePlansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
