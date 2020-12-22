import { IgoalsCount } from './../../Models/Interfaces/igoals-count';
import { GoalsService } from './../../Services/goals.service';
import { Igoals } from './../../Models/Interfaces/igoals';
import { IredCards } from './../../Models/Interfaces/ired-cards';
import { IyellowCards } from './../../Models/Interfaces/iyellow-cards';
import { RedCardsService } from './../../Services/red-cards.service';
import { YellowCardsService } from './../../Services/yellow-cards.service';
import { Iplayers } from './../../Models/Interfaces/iplayers';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from 'src/app/Services/players.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
player:Iplayers;
yellowList:IyellowCards;
redList:IredCards;
goalsList:IgoalsCount;
playerId:number;
  constructor(private _playerServ:PlayersService,private route: ActivatedRoute, private _yellowServ:YellowCardsService,private _redServ:RedCardsService, private _goalServ:GoalsService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.playerId = this.route.snapshot.params.player_id;
  });

  this._playerServ.getPlayersById(this.playerId).subscribe(
    (playerData)=>this.player = playerData,
    (error) => console.log(error)
  )
  this._yellowServ.getYellowPerPlayer(this.playerId).subscribe(
    (yellowData)=>this.yellowList = yellowData,
    (error)=>console.log(error)
  )
  this._redServ.getRedPerPlayer(this.playerId).subscribe(
    (redData) => this.redList = redData,
    (error)=>console.log(error)
  )
  this._goalServ.getGoalsPerPlayer(this.playerId).subscribe(
    (goalData) => this.goalsList = goalData,
    (error)=>console.log(error)
  )
  }

}
