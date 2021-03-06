"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostsService = void 0;
var core_1 = require("@angular/core");
var PostsService = /** @class */ (function () {
    function PostsService(httpPost) {
        this.httpPost = httpPost;
    }
    PostsService.prototype.getPost = function () {
        return this.httpPost.get("http://localhost:10278/api/posts");
    };
    PostsService.prototype.getPostsById = function (post_id) {
        return this.httpPost.get("http://localhost:10278/api/posts/" + post_id);
    };
    PostsService.prototype.getRecentPosts = function () {
        return this.httpPost.get("http://localhost:10278/api/recentposts");
    };
    PostsService.prototype.getPostsPerType = function () {
        return this.httpPost.get("http://localhost:10278/api/poststype");
    };
    PostsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PostsService);
    return PostsService;
}());
exports.PostsService = PostsService;
