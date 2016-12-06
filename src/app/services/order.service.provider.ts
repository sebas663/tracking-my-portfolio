import {OrderService,OrderServiceFirebase}    from '../services/order.service';
import { Http } from '@angular/http';

let orderServiceFactory = (http: Http) => {
  return new OrderServiceFirebase(http);
};

export let orderServiceProvider =
  { provide: OrderService,
    useFactory: orderServiceFactory,
    deps: [Http]
  };
