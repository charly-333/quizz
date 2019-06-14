import { TestBed } from '@angular/core/testing';

import { QuizzService } from './quizz.service';
import { HttpClient } from '@angular/common/http';

describe('QuizzService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizzService = TestBed.get(QuizzService);
    expect(service).toBeTruthy();
  });
});
