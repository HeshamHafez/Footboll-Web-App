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
  constructor(private _teamsServ: TeamsService) { }

  ngOnInit(): void {
    this._teamsServ.getTeams().subscribe(
      (teamsData)=>this.teamsList = teamsData,
      (error)=>console.log(error)
    );
  }

}
