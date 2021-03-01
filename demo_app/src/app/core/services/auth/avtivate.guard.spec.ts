import { TestBed } from '@angular/core/testing';

import { AvtivateGuard } from './avtivate.guard';

describe('AvtivateGuard', () => {
  let guard: AvtivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AvtivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
