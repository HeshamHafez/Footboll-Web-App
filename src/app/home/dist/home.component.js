"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_leagueServ, _teamServ, _matchServ, _teamMatchServ, _goalServ, _playerServ, _postTagServ, _postServ, _tagServ) {
        this._leagueServ = _leagueServ;
        this._teamServ = _teamServ;
        this._matchServ = _matchServ;
        this._teamMatchServ = _teamMatchServ;
        this._goalServ = _goalServ;
        this._playerServ = _playerServ;
        this._postTagServ = _postTagServ;
        this._postServ = _postServ;
        this._tagServ = _tagServ;
        this.maxMatches = 2;
        this.maxPosts = 2;
        this.maxAnimatedPosts = 3;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._matchServ.getMatches().subscribe(function (matchData) { return _this.matchList = matchData; }, function (error) { return console.log(error); });
        this._postServ.getRecentPosts().subscribe(function (postData) { return _this.postsList = postData; }, function (error) { return console.log(error); });
        this._postServ.getPostsPerType().subscribe(function (postsData) { return _this.postsTypeList = postsData; }, function (error) { return console.log(error); });
        this._leagueServ.getLeagues().subscribe(function (leagueData) { return _this.leagueList = leagueData; }, function (error) { return console.log(error); });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
