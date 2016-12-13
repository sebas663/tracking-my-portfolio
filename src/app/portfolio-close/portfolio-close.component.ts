import { Component, OnInit } from '@angular/core';

const styles = require('./portfolio-close.component.css');
const template = require('./portfolio-close.component.html');

@Component({
  selector: 'app-portfolio-close',
  template: template,
  styleUrls: [ styles ]
})
export class PortfolioCloseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
