import {StockService}          from './stock.service';
import {ProductionService}     from './env-production';
import {DevelopmentService}    from './env-development';
import {FirebaseService}       from './env-firebase';
import { environment }         from '../../../environments/environment';
import { Http }                from '@angular/http';

let stockServiceFactory = (http: Http) => {

  let service : StockService;

  if(environment.isDev) {
      console.log("environment.isDev " + environment.isDev)
      service = new DevelopmentService(http);
  }else if(environment.isFirebase) {
      console.log("environment.isFirebase " + environment.isFirebase)
      service = new FirebaseService(http);
  }else if(environment.isProduction){
      console.log("environment.isProduction " + environment.isProduction)
      service = new ProductionService(http);
  }else{
      console.log("environment default")
      service = new DevelopmentService(http);
  }

  console.log(service)

  return service;
};

export let stockServiceProvider =
  { provide: StockService,
    useFactory: stockServiceFactory,
    deps: [Http]
  };
