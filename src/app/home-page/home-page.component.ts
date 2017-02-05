import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import{Router, ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  data = [];

  //Pagination
  numberPerPage: Number = 5;
  numberPages: Number = 10;
  currentPage:Number;


  constructor(private http: Http, private route: ActivatedRoute) {
    this.refreshDB();
  }
  refreshDB(){
	  this.currentPage = parseInt(this.route.snapshot.url.toString());
    if(isNaN(this.currentPage.valueOf())){
      this.currentPage=0;
    }
	
    this.http.get('http://localhost:3000/' + this.currentPage.valueOf())
      .subscribe(response => {
        this.data = response.json().news;
        this.numberPages = response.json().count;
      });
  }

  getPagination(): Array < Number > {
    var arr = new Array(5);
    var curPage = this.currentPage.valueOf();
	var pgLimit = this.numberPages.valueOf()/4;
	//PerPage based on response from server
    if (curPage > 3 && curPage + 5 <= pgLimit) {
      for (var i = curPage - 2, j = 0; i < curPage + 3; i++, j++) {
        arr[j] = i;  
	 }
    } else if (curPage + 5 > pgLimit) {
		for (var i = pgLimit-5, j = 0; i < pgLimit; i++, j++) {
        arr[j] = i;
      }
    } else {
      for (var i = 0; i < 5; i++) {
        arr[i] = i;
      }
    }
    return arr;
  }


  ngOnInit() {
  }

}

