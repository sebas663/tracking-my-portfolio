import { Injectable }  from '@angular/core';
import { Http }        from '@angular/http';
import { Stock }       from '../../buy-stock/stock';
import 'rxjs/add/operator/toPromise';


@Injectable()
export abstract class StockService {

  abstract getStocks(market: any) : Promise<Stock[]>;
  
  abstract create(name: any): Promise<any>

  filteredStocks(data: any, market: string): any {
    let filteredStocks = [];
    let j = data.json();
    for(let stock of j) {
        if(stock.market.toLowerCase().indexOf(market.toLowerCase()) == 0) {
            filteredStocks.push(stock);
        }
    }
    return filteredStocks;
  }

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}