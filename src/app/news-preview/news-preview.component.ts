import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-preview',
  templateUrl: './news-preview.component.html',
  styleUrls: ['./news-preview.component.css'],

})
export class NewsPreviewComponent implements OnInit {
  
  @Input() data:any; 	

  // data = {
  // 	title:"Title1",
  // 	content:"aaaaaaaa",
  // 	date: "dd/MM/yyyy",
  // 	comments:[1,2,3,4,5,6],
  // 	image:"../assets/hierarchicalstructureofthei.jpg"
  // }

  constructor() { }

  ngOnInit() {
  }


}
