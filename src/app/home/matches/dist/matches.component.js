"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MatchesComponent = void 0;
var core_1 = require("@angular/core");
var MatchesComponent = /** @class */ (function () {
    function MatchesComponent(_matcheServ, _leagueServ, router) {
        this._matcheServ = _matcheServ;
        this._leagueServ = _leagueServ;
        this.router = router;
    }
    MatchesComponent.prototype.ngOnChanges = function () {
    };
    MatchesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._leagueServ.getLeagues().subscribe(function (leagueData) { return _this.leaguesList = leagueData; }, function (error) { return console.log(error); });
    };
    MatchesComponent.prototype.getSelected = function () {
        var _this = this;
        this._matcheServ.getTeamMatchesPerId(this.SelLeagueId).subscribe(function (leagueData) { return _this.matchesList = leagueData; }, function (error) { return console.log(error); });
    };
    MatchesComponent = __decorate([
        core_1.Component({
            selector: 'app-matches',
            templateUrl: './matches.component.html',
            styleUrls: ['./matches.component.css']
        })
    ], MatchesComponent);
    return MatchesComponent;
}());
exports.MatchesComponent = MatchesComponent;
