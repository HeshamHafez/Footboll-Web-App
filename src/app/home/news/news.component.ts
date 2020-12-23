import { IpostTag } from './../../Models/Interfaces/ipost-tag';
import { Itags } from './../../Models/Interfaces/itags';
import { Iposts } from './../../Models/Interfaces/iposts';
import { TagsService } from './../../Services/tags.service';
import { PostTagService } from './../../Services/post-tag.service';
import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/Services/posts.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
postsList:Iposts[];
tagsList:Itags[];
PostTagList:IpostTag[];
  constructor(private _postTagServ:PostTagService, private _postServ: PostsService, private _tagServ: TagsService, private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this._postServ.getRecentPosts().subscribe(
      (newsData) => this.postsList = newsData,
      (error) => console.log(error)
    )

    this._tagServ.getTags().subscribe(
      (tagsData) => this.tagsList = tagsData,
      (error) => console.log(error)
    )

  }

}
