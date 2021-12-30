/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PropertyMockService } from './property-mock.service';

describe('Service: PropertyMock', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertyMockService]
    });
  });

  it('should ...', inject([PropertyMockService], (service: PropertyMockService) => {
    expect(service).toBeTruthy();
  }));
});
