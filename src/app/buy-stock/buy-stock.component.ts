import { Component, OnInit } from '@angular/core';
import { BuyStock }    from './buy-stock';
import { orderServiceProvider } from '../services/order.service.provider';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-buy-stock',
  templateUrl: './buy-stock.component.html',
  styleUrls: [ './buy-stock.component.css' ],
  providers: [ orderServiceProvider ]
})
export class BuyStockComponent implements OnInit {

  es: any;

  constructor(private orderService : OrderService) { }

  ngOnInit() {

    this.es = {
        	firstDayOfWeek: 1,
        	dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
        	dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
        	dayNamesMin: [ "D","L","M","X","J","V","S" ],
            monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
        	monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ]
        };
        
        let today = new Date();
        let month = today.getMonth();
        let prevMonth = (month === 0) ? 11 : month -1;
        let nextMonth = (month === 11) ? 0 : month + 1;
  }

  stocks = [
              {code:"bma",description:"Banco Manco"},
              {code:"bma1",description:"Banco Manco1"},
              {code:"bma2",description:"Banco Manco2"},
            ];

  filteredStocks: any[];

  model = new BuyStock();

  submitted = false;

  onSubmit() { 
    console.log(this.model);
    console.log(this.model.codeStock.code);
    console.log(this.model.quantity);
    console.log(this.model.price);
    console.log(this.model.buyDate);
    console.log(orderServiceProvider);
    console.log(this.orderService);
    
    //this.submitted = true;
    this.submitted = false;
    this.orderService.sendOrder(this.model)
 }
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
