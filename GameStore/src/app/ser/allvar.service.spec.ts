import { TestBed } from '@angular/core/testing';

import { AllvarService } from './allvar.service';

describe('AllvarService', () => {
  let service: AllvarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllvarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
