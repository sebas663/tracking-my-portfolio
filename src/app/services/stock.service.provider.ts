import {StockService,StockServiceProduction}    from '../services/stock.service';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';

let stockServiceFactory = (http: Http) => {
  let service : StockService;
  if(environment.isDev) {
      console.log("environment.isDev " + environment.isDev)
      service = new StockServiceProduction(http);
  }else if(environment.isFirebase) {
      console.log("environment.isFirebase " + environment.isFirebase)
      service = new StockServiceProduction(http);
  }else if(environment.isProduction){
      console.log("environment.isProduction " + environment.isProduction)
      service = new StockServiceProduction(http);
  }else{
      console.log("environment default")
      service = new StockServiceProduction(http);
  }
  console.log(service)
  return service;
};

export let stockServiceProvider =
  { provide: StockService,
    useFactory: stockServiceFactory,
    deps: [Http]
  };
