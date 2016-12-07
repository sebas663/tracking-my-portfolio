import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Stock }    from '../buy-stock/stock';
import 'rxjs/add/operator/toPromise';


@Injectable()
export abstract class StockService {

  abstract getStocks() : Promise<Stock[]>;
  abstract create(name: any): Promise<any>

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

@Injectable()
export class StockServiceProduction extends StockService {

  private url = 'https://tracking-my-portfolio-8260e.firebaseio.com/stocks.json';

  constructor(private http: Http) {
    super();
    console.log("StockServiceProduction instance");
   }

  getStocks() : Promise<Stock[]>{
    //return this.http
	  // .get(this.url)
     // .toPromise()
     // .then(res => res.json())
     // .catch(this.handleError);
      const STOCKS: Stock[] = [
              {code:"bma",description:"Banco Manco"},
              {code:"erar",description:"Sinderar"},
              {code:"celu",description:"Celulosa"},
              {code:"apbr",description:"Petrolao Brasileiro"},
              {code:"come",description:"Cometa"},
              {code:"tran",description:"Tranvias"}
            ];     
     return Promise.resolve(STOCKS);;
  }

  create(name: any): Promise<any> {
	//console.log("name " + name);
	//console.log("name string " + JSON.stringify({name: name}));
    return this.http
      //.post(this.heroesUrl, JSON.stringify({name: name}))
	  .post(this.url, {name: name})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }
}
