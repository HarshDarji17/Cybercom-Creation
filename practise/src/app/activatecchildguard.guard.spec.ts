import { TestBed } from '@angular/core/testing';

import { ActivatecchildguardGuard } from './activatecchildguard.guard';

describe('ActivatecchildguardGuard', () => {
  let guard: ActivatecchildguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActivatecchildguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
