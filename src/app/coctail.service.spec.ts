import { TestBed } from '@angular/core/testing';

import { CoctailService } from './coctail.service';

describe('CoctailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoctailService = TestBed.get(CoctailService);
    expect(service).toBeTruthy();
  });
});
