import { Imatches } from './../Models/Interfaces/imatches';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  constructor(private httpMatches:HttpClient) { }

  getMatches():Observable<Imatches[]>{
    return this.httpMatches.get<Imatches[]>(`http://localhost:10278/api/matches`);
  }

  getMatchesById(id:number):Observable<Imatches[]>{
    return this.httpMatches.get<Imatches[]>(`http://localhost:10278/api/matches/${id}`);
  }

  getMatchesByLeagueId(id:number):Observable<Imatches[]>{
    return this.httpMatches.get<Imatches[]>(`http://localhost:10278/api/matchesByLeague/${id}`);
  }
}
