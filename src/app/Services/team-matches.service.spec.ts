import { TestBed } from '@angular/core/testing';

import { TeamMatchesService } from './team-matches.service';

describe('TeamMatchesService', () => {
  let service: TeamMatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamMatchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
