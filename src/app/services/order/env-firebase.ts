import { Injectable }    from '@angular/core';
import { Http }          from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { OrderService }  from './order.service';

@Injectable()
export class FirebaseService extends OrderService {

  private url = 'https://tracking-my-portfolio-8260e.firebaseio.com/ordersFirebase.json';

  constructor(private http: Http) {
    super();
    console.log("FirebaseService instance");
   }

  sendOrder(order: any): Promise<any> {
	//console.log("name " + name);
	//console.log("name string " + JSON.stringify({name: name}));
    const info = JSON.stringify(order)
    //console.log("FirebaseService");
    //console.log("http" + this.http);
    return this.http
      .post(this.url,info)
      .toPromise()
      .then(res => console.log(res.json()))
      .catch(this.handleError);
  }
}