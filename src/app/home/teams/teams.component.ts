import { LeaguesService } from './../../Services/leagues.service';
import { Ileagues } from './../../Models/Interfaces/ileagues';
import { TeamsService } from './../../Services/teams.service';
import { ITeams } from './../../Models/Interfaces/iteams';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teamsList: ITeams[]
  leaguesList: Ileagues[]
  SelLeagueId:number;
  constructor(private _teamsServ: TeamsService, private _leagueServ:LeaguesService) { }

  ngOnInit(): void {
    // this._teamsServ.getTeams().subscribe(
    //   (teamsData)=>this.teamsList = teamsData,
    //   (error)=>console.log(error)
    // );
    this._leagueServ.getLeagues().subscribe(
      (leagueData)=>this.leaguesList = leagueData,
      (error)=>console.log(error)
    );

  }

  getSelected():void{
    console.log("mmm");

    this._teamsServ.getLeagueTeams(this.SelLeagueId).subscribe(
      (leagueData)=>this.teamsList = leagueData,
      (error)=>console.log(error)
    );
    
  }


}
