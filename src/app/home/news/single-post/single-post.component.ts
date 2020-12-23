import { Iposts } from './../../../Models/Interfaces/iposts';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IpostTag } from 'src/app/Models/Interfaces/ipost-tag';
import { Itags } from 'src/app/Models/Interfaces/itags';
import { PostTagService } from 'src/app/Services/post-tag.service';
import { PostsService } from 'src/app/Services/posts.service';
import { TagsService } from 'src/app/Services/tags.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  returnPost:Iposts;
  postsList:Iposts[];
  tagsList:Itags[];
  PostTagList:IpostTag[];
  PostId:number;
  maxPosts: number;

  constructor(private _postTagServ:PostTagService,
    private _postServ: PostsService,
    private _tagServ: TagsService,
    private route:ActivatedRoute,
    private loc:Location) {
    this.maxPosts = 3;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.PostId = this.route.snapshot.params.id;
  });

  this._postServ.getPostsById(this.PostId).subscribe(
    (postData)=>this.returnPost = postData,
    (error) => console.log(error)
  )

  this._postTagServ.getPostTags(this.PostId).subscribe(
    (posttagsData)=>this.PostTagList = posttagsData,
    (error) => console.log(error)
  )

  this._postServ.getRecentPosts().subscribe(
    (postsData)=>this.postsList = postsData,
    (error) => console.log(error)
  )
  }

  goBack(){
    this.loc.back();
   }
}
