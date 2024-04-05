import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { etudiantGuard } from './etudiant.guard';

describe('etudiantGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => etudiantGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
