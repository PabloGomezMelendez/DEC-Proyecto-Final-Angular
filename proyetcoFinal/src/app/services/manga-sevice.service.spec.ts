import { TestBed } from '@angular/core/testing';

import { MangaSeviceService } from './manga-sevice.service';

describe('MangaSeviceService', () => {
  let service: MangaSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangaSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
