import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export abstract class StockService {

  abstract getStocks() : Promise<any>;
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

  getStocks() : Promise<any>{
    //return this.http
	 // .get(this.url)
     // .toPromise()
     // .then(res => res.json())
     // .catch(this.handleError);

     let stocks = [
              {code:"bma",description:"Banco Manco"},
              {code:"bma1",description:"Banco Manco1"},
              {code:"bma2",description:"Banco Manco2"},
            ];
     return Promise.resolve(stocks);;
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
