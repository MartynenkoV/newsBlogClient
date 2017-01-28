import { Component, OnInit } from '@angular/core';
import { Http, Response }  from '@angular/http';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("Submit");
  }

}
