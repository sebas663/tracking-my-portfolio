import { Component, OnInit } from '@angular/core';
import { BuyStock }    from './buy-stock';

@Component({
  selector: 'app-buy-stock',
  templateUrl: './buy-stock.component.html',
  styleUrls: ['./buy-stock.component.css']
})
export class BuyStockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stocks = [
              {code:"bma",description:"Banco Manco"},
              {code:"bma1",description:"Banco Manco1"},
              {code:"bma2",description:"Banco Manco2"},
            ];

  filteredStocks: any[];

  stock:{code:"",description:""};

  model = new BuyStock();

  submitted = false;

  onSubmit() { this.submitted = true; }
  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;

  newBuyStock() {
    this.model = new BuyStock();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  filterStocks(event) {
        this.filteredStocks = [];
        for(let i = 0; i < this.stocks.length; i++) {
            let stock = this.stocks[i];
            if(stock.code.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredStocks.push(stock);
            }
        }
    }

    handleDropdownClick() {
        this.filteredStocks = [];
        
        //mimic remote call
        setTimeout(() => {
            this.filteredStocks = this.stocks;
        }, 100)
    }

}
