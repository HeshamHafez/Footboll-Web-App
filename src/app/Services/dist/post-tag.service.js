"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostTagService = void 0;
var core_1 = require("@angular/core");
var PostTagService = /** @class */ (function () {
    function PostTagService(httpPostTag) {
        this.httpPostTag = httpPostTag;
    }
    PostTagService.prototype.getNews = function () {
        return this.httpPostTag.get("http://localhost:10278/api/PostTags");
    };
    PostTagService.prototype.getPostTags = function (post_id) {
        return this.httpPostTag.get("http://localhost:10278/api/PostTags/" + post_id);
    };
    PostTagService.prototype.getTagPosts = function (tag_id) {
        return this.httpPostTag.get("http://localhost:10278/api/tagposts/" + tag_id);
    };
    PostTagService.prototype.getRecentTagPosts = function (tag_id) {
        return this.httpPostTag.get("http://localhost:10278/api/recenttagposts/" + tag_id);
    };
    PostTagService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PostTagService);
    return PostTagService;
}());
exports.PostTagService = PostTagService;
