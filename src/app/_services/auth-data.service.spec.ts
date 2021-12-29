/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthDataService } from './auth-data.service';

describe('Service: AuthData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthDataService]
    });
  });

  it('should ...', inject([AuthDataService], (service: AuthDataService) => {
    expect(service).toBeTruthy();
  }));
});
