import { Component, OnInit } from '@angular/core';

const styles = require('./portfolio-open.component.css');
const template = require('./portfolio-open.component.html');

@Component({
  selector: 'app-portfolio-open',
  template: template,
  styleUrls: [ styles ]
})
export class PortfolioOpenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
