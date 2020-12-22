import { IgoalsCount } from './../Models/Interfaces/igoals-count';
import { Igoals } from './../Models/Interfaces/igoals';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  constructor(private httpGoals:HttpClient) { }

  getGoals():Observable<Igoals>{
    return this.httpGoals.get<Igoals>(`http://localhost:10278/api/goals`);
  }

  getGoalsPerPlayer(playerId:number):Observable<IgoalsCount>{
    return this.httpGoals.get<IgoalsCount>(`http://localhost:10278/api/goals/${playerId}`);
  }
}
