import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  //  subscription : Subscription;
  constructor(private router: Router) {
  }
  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    // this.subscription = this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd)
    // ).subscribe(()=>window.scrollTo(0,0))
  }
  title = 'footballwebapp';
}
