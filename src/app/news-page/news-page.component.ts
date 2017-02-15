import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import{Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {

 News = {}; 
 Content={content:"404"};
  constructor(private http: Http,private route: ActivatedRoute) {

    //console.log(this.route.snapshot.url[1].toString());

    this.http.get('http://localhost:3000/news/' + this.route.snapshot.url[1].toString())
      .subscribe(response => {
        //if 404
        this.News = response.json().news;
        this.Content = response.json().content;
        console.log(this.Content.content);
      });

   }

  ngOnInit() {
  }

}
