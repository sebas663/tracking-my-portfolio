import { OrderService }          from './order.service';
import { FirebaseService }       from './impl.firebase.service';
import { environment }           from '../../../environments/environment';
import { Http }                  from '@angular/http';
import { ServiceImplEnum }       from '../service.impl.enum';
import { ParamEnvironment }  from '../param.environment';
import { PARAM_ENVIRONMENT_DICTIONARY }  from '../param.environment.dictionary';


let orderServiceFactory = (http: Http) => {

  let service: OrderService;
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
    let service: OrderService;

    switch (environment.serviceImplType) {
        case ServiceImplEnum[ServiceImplEnum.FIREBASE]:
            service = new FirebaseService(http,param);
            break;
        default:           
            break;
    }
    return service;
  }


export let orderServiceProvider =
  { provide: OrderService,
    useFactory: orderServiceFactory,
    deps: [Http]
  };
