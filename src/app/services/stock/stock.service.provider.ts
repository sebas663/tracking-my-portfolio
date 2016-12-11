import {StockService}          from './stock.service';
import {FirebaseService}       from './impl.firebase.service';
import { environment }         from '../../../environments/environment';
import { Http }                from '@angular/http';
import { ServiceImplEnum }       from '../service.impl.enum';
import { ParamEnvironment }  from '../param.environment';
import { PARAM_ENVIRONMENT_DICTIONARY }  from '../param.environment.dictionary';

let stockServiceFactory = (http: Http) => {

  let service : StockService;
  let param: ParamEnvironment;
  
  if(environment.isDevelopment) {
      param = PARAM_ENVIRONMENT_DICTIONARY.item(ServiceImplEnum.DEVELOPMENT + environment.serviceImplType);
      service = getService(http,param);
  }else if(environment.isTestProduction) {
      param = PARAM_ENVIRONMENT_DICTIONARY.item(ServiceImplEnum.TESTPRODUCTION + environment.serviceImplType);
      service = getService(http,param);
  }else if(environment.isProduction){
      param = PARAM_ENVIRONMENT_DICTIONARY.item(ServiceImplEnum.PRODUCTION + environment.serviceImplType);
      service = getService(http,param);
  }
   return service;
};

let getService = (http: Http, param: ParamEnvironment) => {
    let service: StockService;

    switch (environment.serviceImplType) {
        case ServiceImplEnum[ServiceImplEnum.FIREBASE]:
            service = new FirebaseService(http,param);
            break;
        default:           
            break;
    }
    return service;
  }
export let stockServiceProvider =
  { provide: StockService,
    useFactory: stockServiceFactory,
    deps: [Http]
  };
