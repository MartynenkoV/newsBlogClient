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
	numberPerPage:Number = 5;
	numberPages:Number;

	

	constructor(private http: Http,private route:ActivatedRoute) {
		//const url: Observable<string> = route.url.map(segments => segments.join(''));
		console.log(route.snapshot.url.toString());
	  http.get('http://localhost:3000/'+route.snapshot.url.toString())
	    .subscribe(response => {
	      //console.log(response.json());
	      this.data = response.json().news;
				this.numberPages = response.json().count;
	    });
	}



	ngOnInit() {
	}

}
