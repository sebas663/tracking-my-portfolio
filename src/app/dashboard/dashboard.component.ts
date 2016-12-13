import { Component, OnInit } from '@angular/core';

const styles = require('./dashboard.component.css');
const template = require('./dashboard.component.html');

@Component({
  selector: 'app-dashboard',
  template: template,
  styleUrls: [ styles ]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
