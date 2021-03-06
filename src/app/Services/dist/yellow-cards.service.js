"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.YellowCardsService = void 0;
var core_1 = require("@angular/core");
var YellowCardsService = /** @class */ (function () {
    function YellowCardsService(httpYellow) {
        this.httpYellow = httpYellow;
    }
    YellowCardsService.prototype.getYellow = function () {
        return this.httpYellow.get("http://localhost:10278/api/yellow_cards");
    };
    YellowCardsService.prototype.getYellowPerPlayer = function (player_id) {
        return this.httpYellow.get("http://localhost:10278/api/yellowPlayer/" + player_id);
    };
    YellowCardsService.prototype.getYellowPerMatch = function (matchId) {
        return this.httpYellow.get("http://localhost:10278/api/yellowMatch/" + matchId);
    };
    YellowCardsService.prototype.getYellowPerTeam = function (teamId) {
        return this.httpYellow.get("http://localhost:10278/api/yellowTeam/" + teamId);
    };
    YellowCardsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], YellowCardsService);
    return YellowCardsService;
}());
exports.YellowCardsService = YellowCardsService;
