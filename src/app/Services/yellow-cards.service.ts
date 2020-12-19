import { IyellowCards } from './../Models/Interfaces/iyellow-cards';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YellowCardsService {

  constructor(private httpYellow:HttpClient) { }

  getYellow():Observable<IyellowCards>{
    return this.httpYellow.get<IyellowCards>(`localhost:10278/api/yellow_cards`);
  }
  getYellowPerPlayer(playerId:number):Observable<IyellowCards>{
    return this.httpYellow.get<IyellowCards>(`localhost:10278/api/yellowPlayer/${playerId}`);
  }
  getYellowPerMatch(matchId:number):Observable<IyellowCards>{
    return this.httpYellow.get<IyellowCards>(`localhost:10278/api/yellowMatch/${matchId}`);
  }
  getYellowPerTeam(teamId:number):Observable<IyellowCards>{
    return this.httpYellow.get<IyellowCards>(`localhost:10278/api/yellowTeam/${teamId}`);
  }
}
