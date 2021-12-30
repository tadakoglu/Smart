/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListMockService } from './list-mock.service';

describe('Service: ListMock', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListMockService]
    });
  });

  it('should ...', inject([ListMockService], (service: ListMockService) => {
    expect(service).toBeTruthy();
  }));
});
