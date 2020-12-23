import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IpostTag } from 'src/app/Models/Interfaces/ipost-tag';
import { Iposts } from 'src/app/Models/Interfaces/iposts';
import { Itags } from 'src/app/Models/Interfaces/itags';
import { PostTagService } from 'src/app/Services/post-tag.service';
import { PostsService } from 'src/app/Services/posts.service';
import { TagsService } from 'src/app/Services/tags.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
tagId:number;
postsList:Iposts[];
tagsList:Itags[];
PostTagList:IpostTag[];
maxPosts: number;

  constructor(private _postTagServ:PostTagService, private _postServ: PostsService, private _tagServ: TagsService, private route:ActivatedRoute) {
    this.maxPosts = 3;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.tagId = this.route.snapshot.params.id;
  });

  this._postTagServ.getTagPosts(this.tagId).subscribe(
    (postsData)=>this.PostTagList = postsData,
    (error) => console.log(error)
  )

  this._postServ.getPost().subscribe(
    (postsData)=>this.postsList = postsData,
    (error) => console.log(error)
  )
  }

}
