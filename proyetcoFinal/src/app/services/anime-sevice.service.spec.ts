import { TestBed } from '@angular/core/testing';

import { AnimeSeviceService } from './anime-sevice.service';

describe('AnimeSeviceService', () => {
  let service: AnimeSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
