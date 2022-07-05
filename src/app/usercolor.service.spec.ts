import { TestBed } from '@angular/core/testing';

import { UsercolorService } from './usercolor.service';

describe('UsercolorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsercolorService = TestBed.get(UsercolorService);
    expect(service).toBeTruthy();
  });
});
