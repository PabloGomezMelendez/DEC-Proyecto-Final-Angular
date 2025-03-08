import { TestBed } from '@angular/core/testing';

import { TopSeviceService } from './top-sevice.service';

describe('TopSeviceService', () => {
  let service: TopSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
