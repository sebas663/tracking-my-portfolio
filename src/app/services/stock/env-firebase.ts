import { Injectable }      from '@angular/core';
import { Http }            from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { StockService }    from './stock.service';
import { Stock }           from '../../buy-stock/stock';
import { STOCKS }          from './mock-stock';

@Injectable()
export class FirebaseService extends StockService {

  private url = 'https://tracking-my-portfolio-8260e.firebaseio.com/stocksFirebase.json';

  constructor(private http: Http) {
    super();
    console.log("FirebaseService instance");
   }

  getStocks(market: any) : Promise<Stock[]>{
     return this.http
                .get(this.url)
                .toPromise()
                .then(res => {
                      let filteredStocks = [];
                      for(let i = 0; i < res.json().length; i++) {
                          let stock = res.json()[i];
                          if(stock.market.toLowerCase().indexOf(market.toLowerCase()) == 0) {
                              filteredStocks.push(stock);
                          }
                      }
                      return filteredStocks;
                })
                .catch(this.handleError);     
     //return Promise.resolve(STOCKS);
  }

  create(stock: any): Promise<any> {
    const data = JSON.stringify(stock)
    return this.http
	  .post(this.url,data)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }
}