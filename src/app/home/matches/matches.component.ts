import { MatchesService } from './../../Services/matches.service';
import { Imatches } from './../../Models/Interfaces/imatches';
import { Ileagues } from './../../Models/Interfaces/ileagues';
import { LeaguesService } from './../../Services/leagues.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IteamMatches } from 'src/app/Models/Interfaces/iteam-matches';
import { TeamMatchesService } from 'src/app/Services/team-matches.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit, OnChanges{
  matchesList:Imatches[];
  leaguesList:Ileagues[];
  SelLeagueId:number;
  LeagueName:string;
  constructor(private _matcheServ:MatchesService, private _leagueServ:LeaguesService, private router:Router) { }

  ngOnChanges(): void {
  }

  ngOnInit(): void {
    this._leagueServ.getLeagues().subscribe(
      (leagueData)=>this.leaguesList = leagueData,
      (error)=>console.log(error)
    );
  }

  getSelected():void{
    this._matcheServ.getMatchesByLeagueId(this.SelLeagueId).subscribe(
      (leagueData)=>this.matchesList = leagueData,
      (error)=>console.log(error)
    );
  }

}
