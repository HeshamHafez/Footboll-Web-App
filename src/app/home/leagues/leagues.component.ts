import { Ileagues } from './../../Models/Interfaces/ileagues';
import { LeaguesService } from './../../Services/leagues.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  LeagueList:Ileagues[];

  constructor(private _LeagueServ:LeaguesService) { }

  ngOnInit(): void {
    this._LeagueServ.getLeagues().subscribe(
      (LeagueData)=>this.LeagueList =LeagueData,
      (error)=>console.log(error)
    );
  }

}
