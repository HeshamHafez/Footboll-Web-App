import { IpostTag } from './../Models/Interfaces/ipost-tag';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostTagService {

  constructor(private httpPostTag:HttpClient) { }

  getNews():Observable<IpostTag[]>{
    return this.httpPostTag.get<IpostTag[]>(`http://localhost:10278/api/PostTags`);
  }

  getPostTags(post_id:number):Observable<IpostTag[]>{
    return this.httpPostTag.get<IpostTag[]>(`http://localhost:10278/api/PostTags/${post_id}`);
  }

  getTagPosts(tag_id:number):Observable<IpostTag[]>{
    return this.httpPostTag.get<IpostTag[]>(`http://localhost:10278/api/tagposts/${tag_id}`);
  }

  getRecentTagPosts(tag_id:number):Observable<IpostTag[]>{
    return this.httpPostTag.get<IpostTag[]>(`http://localhost:10278/api/recenttagposts/${tag_id}`);
  }
}
