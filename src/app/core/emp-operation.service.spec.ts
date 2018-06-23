import { TestBed, inject } from '@angular/core/testing';

import { EmpOperationService } from './emp-operation.service';

describe('EmpOperationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpOperationService]
    });
  });

  it('should be created', inject([EmpOperationService], (service: EmpOperationService) => {
    expect(service).toBeTruthy();
  }));
});
