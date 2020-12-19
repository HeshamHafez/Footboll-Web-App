"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TeamsService = void 0;
var core_1 = require("@angular/core");
var TeamsService = /** @class */ (function () {
    function TeamsService(httpTeams) {
        this.httpTeams = httpTeams;
    }
    TeamsService.prototype.getTeams = function () {
        return this.httpTeams.get("http://localhost:10278/api/teams");
    };
    TeamsService.prototype.getTeamsById = function (teamId) {
        return this.httpTeams.get("http://localhost:10278/api/teams/" + teamId);
    };
    TeamsService.prototype.getLeagueTeams = function (leagueId) {
        return this.httpTeams.get("http://localhost:10278/api/LeagueTeams/" + leagueId);
    };
    TeamsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TeamsService);
    return TeamsService;
}());
exports.TeamsService = TeamsService;
