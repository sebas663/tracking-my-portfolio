import { Injectable }    from '@angular/core';
import { Http }          from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { OrderService }  from './order.service';
import { ParamEnvironment }  from '../param.environment';

@Injectable()
export class FirebaseService extends OrderService {

  private url: string;

  constructor(private http: Http,private param: ParamEnvironment) {
    super();
    this.url = param.url + "/orders.json";
    console.log("OrderService FirebaseService instance");
   }

  sendOrder(order: any): Promise<any> {
    const data = JSON.stringify(order)
    return this.http
      .post(this.url,data)
      .toPromise()
      .then(res => console.log(res.json()))
      .catch(this.handleError);
  }
}