import {OrderService,OrderServiceFirebase,OrderServiceProdServer,OrderServiceDevServer }    from '../services/order.service';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';

let orderServiceFactory = (http: Http) => {
  let service : OrderService;
  if(environment.isDev) {
      console.log("environment.isDev " + environment.isDev)
      service = new OrderServiceDevServer(http);
  }else if(environment.isFirebase) {
      console.log("environment.isFirebase " + environment.isFirebase)
      service = new OrderServiceFirebase(http);
  }else if(environment.isProduction){
      console.log("environment.isProduction " + environment.isProduction)
      service = new OrderServiceProdServer(http);
  }else{
      console.log("environment default")
      service = new OrderServiceDevServer(http);
  }
  console.log(service)
  return service;
};

export let orderServiceProvider =
  { provide: OrderService,
    useFactory: orderServiceFactory,
    deps: [Http]
  };
