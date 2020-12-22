import { PostTagService } from './../../Services/post-tag.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private _postTagServ:PostTagService) { }

  ngOnInit(): void {
  }

}
