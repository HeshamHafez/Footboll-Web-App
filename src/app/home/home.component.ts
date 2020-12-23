import { Iplayers } from './../Models/Interfaces/iplayers';
import { Ileagues } from './../Models/Interfaces/ileagues';
import { Iposts } from './../Models/Interfaces/iposts';
import { Imatches } from './../Models/Interfaces/imatches';
import { PlayersService } from './../Services/players.service';
import { GoalsService } from './../Services/goals.service';
import { MatchesService } from './../Services/matches.service';
import { TeamsService } from './../Services/teams.service';
import { LeaguesService } from './../Services/leagues.service';
import { Component, OnInit } from '@angular/core';
import { TeamMatchesService } from '../Services/team-matches.service';
import { PostTagService } from '../Services/post-tag.service';
import { PostsService } from '../Services/posts.service';
import { TagsService } from '../Services/tags.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  matchList:Imatches[];
  postsList:Iposts[];
  postsTypeList:Iposts[];
  leagueList:Ileagues[];
  playerList:Iplayers[];
  maxMatches: number;
  maxPosts:number;
  maxAnimatedPosts:number;
  constructor(
    private _leagueServ:LeaguesService,
    private _teamServ:TeamsService,
    private _matchServ:MatchesService,
    private _teamMatchServ:TeamMatchesService,
    private _goalServ:GoalsService,
    private _playerServ:PlayersService,
    private _postTagServ:PostTagService,
    private _postServ: PostsService,
    private _tagServ: TagsService
    ) {
      this.maxMatches = 2;
      this.maxPosts = 2;
      this.maxAnimatedPosts =3;
     }

  ngOnInit(): void {
    this._matchServ.getMatches().subscribe(
      (matchData)=>this.matchList = matchData,
      (error)=>console.log(error)
    )

    this._postServ.getRecentPosts().subscribe(
      (postData)=>this.postsList = postData,
      (error)=>console.log(error)
    )

    this._postServ.getPostsPerType().subscribe(
      (postsData)=>this.postsTypeList = postsData,
      (error)=>console.log(error)
    )

    this._leagueServ.getLeagues().subscribe(
      (leagueData)=>this.leagueList = leagueData,
      (error)=>console.log(error)
    )


  }




}
