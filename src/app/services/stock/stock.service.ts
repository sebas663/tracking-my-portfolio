import { Injectable }  from '@angular/core';
import { Http }        from '@angular/http';
import { Stock }       from '../../buy-stock/stock';
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