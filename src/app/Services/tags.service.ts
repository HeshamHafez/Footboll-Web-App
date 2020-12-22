import { Itags } from './../Models/Interfaces/itags';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private httpTag:HttpClient) { }

  getTags():Observable<Itags[]>{
    return this.httpTag.get<Itags[]>(`http://localhost:10278/api/tags`);
  }

  getTagById(tag_id:number):Observable<Itags[]>{
    return this.httpTag.get<Itags[]>(`http://localhost:10278/api/tags/${tag_id}`);
  }
}
