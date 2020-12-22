"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PlayerComponent = void 0;
var core_1 = require("@angular/core");
var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(_playerServ, route, _yellowServ, _redServ, _goalServ) {
        this._playerServ = _playerServ;
        this.route = route;
        this._yellowServ = _yellowServ;
        this._redServ = _redServ;
        this._goalServ = _goalServ;
    }
    PlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.playerId = _this.route.snapshot.params.player_id;
        });
        this._playerServ.getPlayersById(this.playerId).subscribe(function (playerData) { return _this.player = playerData; }, function (error) { return console.log(error); });
        this._yellowServ.getYellowPerPlayer(this.playerId).subscribe(function (yellowData) { return _this.yellowList = yellowData; }, function (error) { return console.log(error); });
        this._redServ.getRedPerPlayer(this.playerId).subscribe(function (redData) { return _this.redList = redData; }, function (error) { return console.log(error); });
        this._goalServ.getGoalsPerPlayer(this.playerId).subscribe(function (goalData) { return _this.goalsList = goalData; }, function (error) { return console.log(error); });
    };
    PlayerComponent = __decorate([
        core_1.Component({
            selector: 'app-player',
            templateUrl: './player.component.html',
            styleUrls: ['./player.component.css']
        })
    ], PlayerComponent);
    return PlayerComponent;
}());
exports.PlayerComponent = PlayerComponent;
