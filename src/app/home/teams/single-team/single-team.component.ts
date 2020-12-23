import { Iplayers } from './../../../Models/Interfaces/iplayers';
import { PlayersService } from './../../../Services/players.service';
import { TeamsService } from './../../../Services/teams.service';
import { ITeams } from './../../../Models/Interfaces/iteams';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-single-team',
  templateUrl: './single-team.component.html',
  styleUrls: ['./single-team.component.css']
})
export class SingleTeamComponent implements OnInit {
team:ITeams;
playersList:Iplayers[];
teamId:number;
  constructor(
    private _teamServ:TeamsService,
    private route: ActivatedRoute,
    private _playerServ:PlayersService,
    private loc:Location
    ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.teamId = this.route.snapshot.params.team_id;
  });
  this._teamServ.getTeamsById(this.teamId).subscribe(
    (teamData)=>this.team = teamData,
    (error) => console.log(error)
  )
  this._playerServ.getplayerTeam(this.teamId).subscribe(
    (playerData) => this.playersList = playerData,
    (error)=> console.log(error)
  )
  }

  goBack(){
    this.loc.back();
   }

}
