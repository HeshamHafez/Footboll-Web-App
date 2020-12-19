import { IteamMatches } from './../Models/Interfaces/iteam-matches';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamMatchesService {

  constructor(private httpTeamMatches:HttpClient) { }

  getTeamMatches():Observable<IteamMatches[]>{
    return this.httpTeamMatches.get<IteamMatches[]>(`http://localhost:10278/api/teammatches`)
  }

  getTeamMatchesPerId(id:number):Observable<IteamMatches[]>{
    return this.httpTeamMatches.get<IteamMatches[]>(`http://localhost:10278/api/teammatches/${id}`)
  }

}
