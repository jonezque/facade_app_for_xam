import { TestBed } from '@angular/core/testing';

import { FormsLibService } from './forms-lib.service';

describe('FormsLibService', () => {
  let service: FormsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
