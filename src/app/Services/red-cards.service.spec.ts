import { TestBed } from '@angular/core/testing';

import { RedCardsService } from './red-cards.service';

describe('RedCardsService', () => {
  let service: RedCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
