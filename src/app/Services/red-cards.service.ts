import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IredCards } from '../Models/Interfaces/ired-cards';

@Injectable({
  providedIn: 'root'
})
export class RedCardsService {

  constructor(private httpRed:HttpClient) { }

  getRed():Observable<IredCards>{
    return this.httpRed.get<IredCards>(`http://localhost:10278/api/red_cards`);
  }
  getRedPerPlayer(playerId:number):Observable<IredCards>{
    return this.httpRed.get<IredCards>(`http://localhost:10278/api/redPlayer/${playerId}`);
  }
  getRedPerMatch(matchId:number):Observable<IredCards>{
    return this.httpRed.get<IredCards>(`http://localhost:10278/api/redMatch/${matchId}`);
  }
  getRedPerTeam(teamId:number):Observable<IredCards>{
    return this.httpRed.get<IredCards>(`http://localhost:10278/api/redTeam/${teamId}`);
  }
}
