import { Injectable }      from '@angular/core';
import { Http }            from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { StockService }    from './stock.service';
import { Stock }           from '../../buy-stock/stock';
import { ParamEnvironment }  from '../param.environment';

@Injectable()
export class FirebaseService extends StockService {

  private url: string;

  constructor(private http: Http,private param: ParamEnvironment) {
    super();
    this.url = param.url + "/stocks.json";
    console.log("StockService FirebaseService instance");
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