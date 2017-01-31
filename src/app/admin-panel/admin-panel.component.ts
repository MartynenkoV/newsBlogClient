import {Component,OnInit} from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';
import {
  FormsModule
} from '@angular/forms';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private http: Http) {}

  ngOnInit() {}

  addNews(news) {
    console.log(news);

    this.http.post('http://127.0.0.1:3000/',news)
      .subscribe(response => {
        console.log(response.status); // logs 200
        console.log(response.headers); // logs []
      });
  }

}
