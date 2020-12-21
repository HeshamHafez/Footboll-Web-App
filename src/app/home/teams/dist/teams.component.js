"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TeamsComponent = void 0;
var core_1 = require("@angular/core");
var TeamsComponent = /** @class */ (function () {
    function TeamsComponent(_teamsServ, _leagueServ) {
        this._teamsServ = _teamsServ;
        this._leagueServ = _leagueServ;
    }
    TeamsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this._teamsServ.getTeams().subscribe(
        //   (teamsData)=>this.teamsList = teamsData,
        //   (error)=>console.log(error)
        // );
        this._leagueServ.getLeagues().subscribe(function (leagueData) { return _this.leaguesList = leagueData; }, function (error) { return console.log(error); });
    };
    TeamsComponent.prototype.getSelected = function () {
        var _this = this;
        this._teamsServ.getLeagueTeams(this.SelLeagueId).subscribe(function (leagueData) { return _this.teamsList = leagueData; }, function (error) { return console.log(error); });
    };
    TeamsComponent = __decorate([
        core_1.Component({
            selector: 'app-teams',
            templateUrl: './teams.component.html',
            styleUrls: ['./teams.component.css']
        })
    ], TeamsComponent);
    return TeamsComponent;
}());
exports.TeamsComponent = TeamsComponent;
