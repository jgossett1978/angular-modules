import { TestBed } from '@angular/core/testing';

import { CoreCompsService } from './core-comps.service';

describe('CoreCompsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoreCompsService = TestBed.get(CoreCompsService);
    expect(service).toBeTruthy();
  });
});
