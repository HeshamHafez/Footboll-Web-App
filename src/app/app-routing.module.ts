import { SingleTeamComponent } from './home/teams/single-team/single-team.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LeaguesComponent } from './home/leagues/leagues.component';
import { TablesComponent } from './home/leagues/tables/tables.component';
import { MatchesComponent } from './home/matches/matches.component';
import { NewsComponent } from './home/news/news.component';
import { PagenotfoundComponent } from './home/pagenotfound/pagenotfound.component';
import { TeamsComponent } from './home/teams/teams.component';
import { PlayerComponent } from './home/player/player.component';

const routes: Routes = [
  {path:'Home', component:HomeComponent},
  {path:'News', component:NewsComponent},
  {path:'Teams', component:TeamsComponent},
  {path:'Teams/:team_id', component:SingleTeamComponent},
  {path:'Matches', component:MatchesComponent},
  {path:'Leagues', component:LeaguesComponent},
  {path:'Tables/:league_id', component:TablesComponent},
  {path:'Player/:player_id',component:PlayerComponent},
  {path:'About', component:AboutComponent},
  {path:'Contact', component:ContactComponent},
  {path:'',redirectTo:"/Home",pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
