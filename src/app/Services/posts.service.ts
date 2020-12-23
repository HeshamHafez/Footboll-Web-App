import { Iposts } from './../Models/Interfaces/iposts';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpPost:HttpClient) { }

  getPost():Observable<Iposts[]>{
    return this.httpPost.get<Iposts[]>(`http://localhost:10278/api/posts`);
  }

  getPostsById(post_id:number):Observable<Iposts>{
    return this.httpPost.get<Iposts>(`http://localhost:10278/api/posts/${post_id}`);
  }
}
