"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TagsComponent = void 0;
var core_1 = require("@angular/core");
var TagsComponent = /** @class */ (function () {
    function TagsComponent(_postTagServ, _postServ, _tagServ, route, loc) {
        this._postTagServ = _postTagServ;
        this._postServ = _postServ;
        this._tagServ = _tagServ;
        this.route = route;
        this.loc = loc;
        this.maxPosts = 3;
    }
    TagsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.tagId = _this.route.snapshot.params.id;
        });
        this._postTagServ.getRecentTagPosts(this.tagId).subscribe(function (postsData) { return _this.PostTagList = postsData; }, function (error) { return console.log(error); });
        this._postServ.getRecentPosts().subscribe(function (postsData) { return _this.postsList = postsData; }, function (error) { return console.log(error); });
    };
    TagsComponent.prototype.goBack = function () {
        this.loc.back();
    };
    TagsComponent = __decorate([
        core_1.Component({
            selector: 'app-tags',
            templateUrl: './tags.component.html',
            styleUrls: ['./tags.component.css']
        })
    ], TagsComponent);
    return TagsComponent;
}());
exports.TagsComponent = TagsComponent;
