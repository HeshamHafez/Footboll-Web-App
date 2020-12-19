import { Iplayers } from './../Models/Interfaces/iplayers';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private httpPlayer:HttpClient) { }

  getPlayers():Observable<Iplayers[]>{
    return this.httpPlayer.get<Iplayers[]>(`http://localhost:10278/api/players`);
  }

  getPlayersById(playerId:number):Observable<Iplayers[]>{
    return this.httpPlayer.get<Iplayers[]>(`http://localhost:10278/api/teams/${playerId}`);
  }

  getplayerTeam(teamId:number):Observable<Iplayers[]>{
    return this.httpPlayer.get<Iplayers[]>(`http://localhost:10278/api/playerTeam/${teamId}`);
  }
}
