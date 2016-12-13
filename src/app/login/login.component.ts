import { Component, OnInit } from '@angular/core';
import { Auth } from '../services/auth/auth.service';

const styles = require('./login.component.css');
const template = require('./login.component.html');

@Component({
  selector: 'app-login',
  template: template,
  styleUrls: [ styles ],
  providers: [ Auth ]
})
export class LoginComponent implements OnInit {

  constructor(private auth: Auth) { }

  ngOnInit() {
  }

}
