import { Ileagues } from './../Models/Interfaces/ileagues';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  constructor(private httpLeague:HttpClient) { }

  getLeagues():Observable<Ileagues[]>{
    return this.httpLeague.get<Ileagues[]>(`http://localhost:10278/api/leagues`);
  }

  getLeagueById(LeagueId:number):Observable<Ileagues[]>{
    return this.httpLeague.get<Ileagues[]>(`http://localhost:10278/api/leagues/${LeagueId}`);
  }
}
