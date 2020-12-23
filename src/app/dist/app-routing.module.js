"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var single_post_component_1 = require("./home/news/single-post/single-post.component");
var single_team_component_1 = require("./home/teams/single-team/single-team.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var about_component_1 = require("./home/about/about.component");
var contact_component_1 = require("./home/contact/contact.component");
var home_component_1 = require("./home/home.component");
var leagues_component_1 = require("./home/leagues/leagues.component");
var tables_component_1 = require("./home/leagues/tables/tables.component");
var matches_component_1 = require("./home/matches/matches.component");
var news_component_1 = require("./home/news/news.component");
var pagenotfound_component_1 = require("./home/pagenotfound/pagenotfound.component");
var teams_component_1 = require("./home/teams/teams.component");
var player_component_1 = require("./home/player/player.component");
var tags_component_1 = require("./home/news/tags/tags.component");
var routes = [
    { path: 'Home', component: home_component_1.HomeComponent },
    { path: 'News', component: news_component_1.NewsComponent },
    { path: 'News/:id', component: single_post_component_1.SinglePostComponent },
    { path: 'Tags/:id', component: tags_component_1.TagsComponent },
    { path: 'Teams', component: teams_component_1.TeamsComponent },
    { path: 'Teams/:team_id', component: single_team_component_1.SingleTeamComponent },
    { path: 'Matches', component: matches_component_1.MatchesComponent },
    { path: 'Leagues', component: leagues_component_1.LeaguesComponent },
    { path: 'Tables/:league_id', component: tables_component_1.TablesComponent },
    { path: 'Player/:player_id', component: player_component_1.PlayerComponent },
    { path: 'About', component: about_component_1.AboutComponent },
    { path: 'Contact', component: contact_component_1.ContactComponent },
    { path: '', redirectTo: "/Home", pathMatch: 'full' },
    { path: '**', component: pagenotfound_component_1.PagenotfoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
