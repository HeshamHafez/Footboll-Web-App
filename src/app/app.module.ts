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
import { ContactComponent } from './home/contact/contact.component';
import { PagenotfoundComponent } from './home/pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
    ContactComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
