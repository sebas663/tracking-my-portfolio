import { Component, OnInit } from '@angular/core';

const styles = require('./sell-stock.component.css');
const template = require('./sell-stock.component.html');

@Component({
  selector: 'app-sell-stock',
  template: template,
  styleUrls: [ styles ]
})
export class SellStockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
