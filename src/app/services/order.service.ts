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
export class OrderServiceProdServer extends OrderService {

  private url = 'https://tracking-my-portfolio-8260e.firebaseio.com/ordersProd.json';

  constructor(private http: Http) {
    super();
    console.log("OrderServiceProdServer instance");
   }

  sendOrder(order: any): Promise<any> {
	//console.log("name " + name);
	//console.log("name string " + JSON.stringify({name: name}));
    const info = JSON.stringify(order)
  //console.log("OrderServiceProdServer");
  //console.log("http" + this.http);
    return this.http
      .post(this.url,info)
      .toPromise()
      .then(res => console.log(res.json()))
      .catch(this.handleError);
  }

}


@Injectable()
export class OrderServiceDevServer extends OrderService {

  private url = 'https://tracking-my-portfolio-8260e.firebaseio.com/ordersDev.json';

  constructor(private http: Http) {
    super();
    console.log("OrderServiceDevServer instance");
   }

  sendOrder(order: any): Promise<any> {
	//console.log("name " + name);
	//console.log("name string " + JSON.stringify({name: name}));
    const info = JSON.stringify(order)
   // console.log("OrderServiceServer");
    //console.log("http" + this.http);
    return this.http
      .post(this.url,info)
      .toPromise()
      .then(res => console.log(res.json()))
      .catch(this.handleError);
  }

}

@Injectable()
export class OrderServiceFirebase extends OrderService {

  private url = 'https://tracking-my-portfolio-8260e.firebaseio.com/ordersFire.json';

  constructor(private http: Http) {
    super();
    console.log("OrderServiceFirebase instance");
   }

  sendOrder(order: any): Promise<any> {
	//console.log("name " + name);
	//console.log("name string " + JSON.stringify({name: name}));
    const info = JSON.stringify(order)
    //console.log("OrderServiceFirebase");
    //console.log("http" + this.http);
    return this.http
      .post(this.url,info)
      .toPromise()
      .then(res => console.log(res.json()))
      .catch(this.handleError);
  }
}
