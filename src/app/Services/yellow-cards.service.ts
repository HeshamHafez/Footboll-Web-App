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
    return this.httpYellow.get<IyellowCards>(`http://localhost:10278/api/yellow_cards`);
  }
  getYellowPerPlayer(player_id:number):Observable<IyellowCards>{
    return this.httpYellow.get<IyellowCards>(`http://localhost:10278/api/yellowPlayer/${player_id}`);
  }
  getYellowPerMatch(matchId:number):Observable<IyellowCards>{
    return this.httpYellow.get<IyellowCards>(`http://localhost:10278/api/yellowMatch/${matchId}`);
  }
  getYellowPerTeam(teamId:number):Observable<IyellowCards>{
    return this.httpYellow.get<IyellowCards>(`http://localhost:10278/api/yellowTeam/${teamId}`);
  }
}
