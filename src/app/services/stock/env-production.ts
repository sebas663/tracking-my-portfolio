import { Injectable }      from '@angular/core';
import { Http }            from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { StockService }    from './stock.service';
import { Stock }           from '../../buy-stock/stock';
import { STOCKS }          from './mock-stock';

@Injectable()
export class ProductionService extends StockService {

  private url = 'https://tracking-my-portfolio-8260e.firebaseio.com/stocksProduction.json';

  constructor(private http: Http) {
    super();
    console.log("ProductionService instance");
   }

  getStocks(market: any) : Promise<Stock[]>{
    //return this.http
	  // .get(this.url)
     // .toPromise()
     // .then(res => res.json())
     // .catch(this.handleError);    
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
