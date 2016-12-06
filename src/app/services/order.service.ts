import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export abstract class OrderService {

  abstract sendOrder(order : any) : Promise<any>;

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

@Injectable()
export class OrderServiceServer extends OrderService {

  private url = 'https://tracking-my-portfolio-8260e.firebaseio.com/orders.json';

  constructor(private http: Http) {
    super();
    console.log("OrderServiceServer instance");
   }

  sendOrder(order: any): Promise<any> {
	//console.log("name " + name);
	//console.log("name string " + JSON.stringify({name: name}));
    const info = JSON.stringify(order)
    console.log("OrderServiceServer");
    console.log("http" + http);
    return this.http
      .post(this.url,info)
      .toPromise()
      .then(res => console.log(res.json()))
      .catch(this.handleError);
  }

}

@Injectable()
export class OrderServiceFirebase extends OrderService {

  private url = 'https://tracking-my-portfolio-8260e.firebaseio.com/orders.json';

  constructor(private http: Http) {
    super();
    console.log("OrderService instance");
   }

  sendOrder(order: any): Promise<any> {
	//console.log("name " + name);
	//console.log("name string " + JSON.stringify({name: name}));
    const info = JSON.stringify(order)
    console.log("OrderServiceFirebase");
    console.log("http" + http);
    return this.http
      .post(this.url,info)
      .toPromise()
      .then(res => console.log(res.json()))
      .catch(this.handleError);
  }
}
