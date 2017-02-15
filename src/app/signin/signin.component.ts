import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  userForm: FormGroup;
  emailCtrl: FormControl;
  passwordCtrl: FormControl;

  constructor(fb: FormBuilder) { 
    this.emailCtrl = fb.control('',[Validators.required, Validators.minLength(3)]);
    this.passwordCtrl = fb.control('',[Validators.required, Validators.minLength(3)]);

    this.userForm = fb.group({
      email: this.emailCtrl,
      password: this.passwordCtrl
    });

  }

  
  ngOnInit() {
  }

  login(){
    console.log(this.userForm.value);
  }

}
