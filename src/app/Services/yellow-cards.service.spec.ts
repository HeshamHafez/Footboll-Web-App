import { TestBed } from '@angular/core/testing';

import { YellowCardsService } from './yellow-cards.service';

describe('YellowCardsService', () => {
  let service: YellowCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YellowCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
