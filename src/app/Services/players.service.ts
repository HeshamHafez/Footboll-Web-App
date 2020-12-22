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

  getPlayersById(player_id:number):Observable<Iplayers>{
    return this.httpPlayer.get<Iplayers>(`http://localhost:10278/api/players/${player_id}`);
  }

  getplayerTeam(teamId:number):Observable<Iplayers[]>{
    return this.httpPlayer.get<Iplayers[]>(`http://localhost:10278/api/playerTeam/${teamId}`);
  }
}
