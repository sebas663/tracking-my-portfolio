import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OrderService {

  private url = 'https://tracking-my-portfolio-8260e.firebaseio.com/orders.json';

  constructor(private http: Http) { }

  sendOrder(order: any): Promise<any> {
	//console.log("name " + name);
	//console.log("name string " + JSON.stringify({name: name}));
    const info = JSON.stringify(order)
    return this.http
      .post(this.url,info)
      .toPromise()
      .then(res => console.log(res.json()))
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
