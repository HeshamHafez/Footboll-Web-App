"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RedCardsService = void 0;
var core_1 = require("@angular/core");
var RedCardsService = /** @class */ (function () {
    function RedCardsService(httpRed) {
        this.httpRed = httpRed;
    }
    RedCardsService.prototype.getRed = function () {
        return this.httpRed.get("localhost:10278/api/red_cards");
    };
    RedCardsService.prototype.getRedPerPlayer = function (playerId) {
        return this.httpRed.get("localhost:10278/api/redPlayer/" + playerId);
    };
    RedCardsService.prototype.getRedPerMatch = function (matchId) {
        return this.httpRed.get("localhost:10278/api/redMatch/" + matchId);
    };
    RedCardsService.prototype.getRedPerTeam = function (teamId) {
        return this.httpRed.get("localhost:10278/api/redTeam/" + teamId);
    };
    RedCardsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], RedCardsService);
    return RedCardsService;
}());
exports.RedCardsService = RedCardsService;
