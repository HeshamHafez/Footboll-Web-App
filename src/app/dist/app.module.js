"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var home_component_1 = require("./home/home.component");
var news_component_1 = require("./home/news/news.component");
var teams_component_1 = require("./home/teams/teams.component");
var matches_component_1 = require("./home/matches/matches.component");
var leagues_component_1 = require("./home/leagues/leagues.component");
var tables_component_1 = require("./home/leagues/tables/tables.component");
var about_component_1 = require("./home/about/about.component");
var pagenotfound_component_1 = require("./home/pagenotfound/pagenotfound.component");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var single_team_component_1 = require("./home/teams/single-team/single-team.component");
var player_component_1 = require("./home/player/player.component");
var ngx_infinite_scroll_1 = require("ngx-infinite-scroll");
var ngx_spinner_1 = require("ngx-spinner");
var single_post_component_1 = require("./home/news/single-post/single-post.component");
var tags_component_1 = require("./home/news/tags/tags.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                home_component_1.HomeComponent,
                news_component_1.NewsComponent,
                teams_component_1.TeamsComponent,
                matches_component_1.MatchesComponent,
                leagues_component_1.LeaguesComponent,
                tables_component_1.TablesComponent,
                about_component_1.AboutComponent,
                pagenotfound_component_1.PagenotfoundComponent,
                single_team_component_1.SingleTeamComponent,
                player_component_1.PlayerComponent,
                single_post_component_1.SinglePostComponent,
                tags_component_1.TagsComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                ngx_infinite_scroll_1.InfiniteScrollModule,
                ngx_spinner_1.NgxSpinnerModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
