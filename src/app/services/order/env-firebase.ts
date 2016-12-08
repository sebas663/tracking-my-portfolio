import { Injectable }    from '@angular/core';
import { Http }          from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { OrderService }  from './order.service';

@Injectable()
export class FirebaseService extends OrderService {

  private url = 'https://tracking-my-portfolio-dev.firebaseio.com/ordersFirebase.json';

  constructor(private http: Http) {
    super();
    console.log("FirebaseService instance");
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