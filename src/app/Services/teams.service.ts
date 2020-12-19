import { ITeams } from './../Models/Interfaces/iteams';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private httpTeams:HttpClient) { }

  getTeams():Observable<ITeams[]>{
    return this.httpTeams.get<ITeams[]>(`http://localhost:10278/api/teams`);
  }

  getTeamsById(teamId:number):Observable<ITeams[]>{
    return this.httpTeams.get<ITeams[]>(`http://localhost:10278/api/teams/${teamId}`);
  }

  getLeagueTeams(leagueId:number):Observable<ITeams[]>{
    return this.httpTeams.get<ITeams[]>(`http://localhost:10278/api/LeagueTeams/${leagueId}`);
  }
}
