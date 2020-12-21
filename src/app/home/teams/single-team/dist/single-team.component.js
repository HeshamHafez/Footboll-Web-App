"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SingleTeamComponent = void 0;
var core_1 = require("@angular/core");
var SingleTeamComponent = /** @class */ (function () {
    function SingleTeamComponent(_teamServ, route, _playerServ) {
        this._teamServ = _teamServ;
        this.route = route;
        this._playerServ = _playerServ;
    }
    SingleTeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.teamId = _this.route.snapshot.params.team_id;
        });
        this._teamServ.getTeamsById(this.teamId).subscribe(function (teamData) { return _this.team = teamData; }, function (error) { return console.log(error); });
        this._playerServ.getplayerTeam(this.teamId).subscribe(function (playerData) { return _this.playersList = playerData; }, function (error) { return console.log(error); });
    };
    __decorate([
        core_1.Input()
    ], SingleTeamComponent.prototype, "selTeam");
    SingleTeamComponent = __decorate([
        core_1.Component({
            selector: 'app-single-team',
            templateUrl: './single-team.component.html',
            styleUrls: ['./single-team.component.css']
        })
    ], SingleTeamComponent);
    return SingleTeamComponent;
}());
exports.SingleTeamComponent = SingleTeamComponent;
