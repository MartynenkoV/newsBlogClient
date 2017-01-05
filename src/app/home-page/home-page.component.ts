import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  data = [{
  	title:"Title1",
  	content:"aaaaaaaa",
  	date: "dd/MM/yyyy",
  	comments:[1,2,3,4,5,6],
  	image:"../assets/hierarchicalstructureofthei.jpg"
  },{
  	title:"Title2",
  	content:"aaaaaaaa",
  	date: "dd/MM/yyyy",
  	comments:[1,2,3,4,6],
  	image:"../assets/fc7021_61c6672c854f4e41ba9ad1e1783ace3a.jpg"
  },{
  	title:"Title3",
  	content:"aaaaaaaa",
  	date: "dd/MM/yyyy",
  	comments:[1,2,3,4,5,6],
  	image:"../assets/looksdelicious.jpg"
  },{
  	title:"Title4",
  	content:"aaaaaaaa",
  	date: "dd/MM/yyyy",
  	comments:[1,2,3],
  	image:"../assets/mappingtheblogosphere.jpg"
  }]	
  constructor() { }

  ngOnInit() {
  }

}
