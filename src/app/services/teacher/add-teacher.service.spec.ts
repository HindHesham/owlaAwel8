import { TestBed, inject } from '@angular/core/testing';

import { AddTeacherService } from './add-teacher.service';

describe('AddTeacherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddTeacherService]
    });
  });

  it('should be created', inject([AddTeacherService], (service: AddTeacherService) => {
    expect(service).toBeTruthy();
  }));
});
