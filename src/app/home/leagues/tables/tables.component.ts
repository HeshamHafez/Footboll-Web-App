import { TeamsService } from './../../../Services/teams.service';
import { ITeams } from './../../../Models/Interfaces/iteams';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
teamsList:ITeams[];
leagueId:number;
  constructor(private _teamServ:TeamsService,
    private route: ActivatedRoute,
    private loc:Location) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.leagueId = this.route.snapshot.params.league_id;
  });
  console.log(this.route.snapshot.params.league_id)

  this._teamServ.getLeagueTeams(this.leagueId).subscribe(
    (teamsData) => this.teamsList = teamsData,
    (error) => console.log(error)
  )
  }

  goBack(){
    this.loc.back();
   }

}
