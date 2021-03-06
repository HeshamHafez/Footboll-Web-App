import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './home/news/news.component';
import { TeamsComponent } from './home/teams/teams.component';
import { MatchesComponent } from './home/matches/matches.component';
import { LeaguesComponent } from './home/leagues/leagues.component';
import { TablesComponent } from './home/leagues/tables/tables.component';
import { AboutComponent } from './home/about/about.component';
import { PagenotfoundComponent } from './home/pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SingleTeamComponent } from './home/teams/single-team/single-team.component';
import { PlayerComponent } from './home/player/player.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from "ngx-spinner";
import { SinglePostComponent } from './home/news/single-post/single-post.component';
import { TagsComponent } from './home/news/tags/tags.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewsComponent,
    TeamsComponent,
    MatchesComponent,
    LeaguesComponent,
    TablesComponent,
    AboutComponent,
    PagenotfoundComponent,
    SingleTeamComponent,
    PlayerComponent,
    SinglePostComponent,
    TagsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    InfiniteScrollModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
