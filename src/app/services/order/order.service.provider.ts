import { OrderService }          from './order.service';
import { FirebaseService }       from './impl.firebase.service';
import { environment }           from '../../../environments/environment';
import { Http }                  from '@angular/http';
import { ServiceImplEnum }       from '../service.impl.enum';
import { ServiceParamEnvironment }  from '../service.param.environment';
import { ParamEnvironment }  from './param.environment';

let orderServiceFactory = (http: Http) => {

  let service : OrderService;
  
  if(environment.isDevelopment) {
      service = getService(http,environment.serviceImplType,ServiceImplEnum.DEVELOPMENT);
  }else if(environment.isTestProduction) {
      service = getService(http,environment.serviceImplType,ServiceImplEnum.TESTPRODUCTION);
  }else if(environment.isProduction){
      service = getService(http,environment.serviceImplType,ServiceImplEnum.PRODUCTION);
  }
   return service;
};

let getService = (http: Http,servicetype:string,param:ParamEnvironment) => {
    let service: OrderService;

    switch (servicetype) {
        case ServiceImplEnum[ServiceImplEnum.FIREBASE]:
        
            service = new FirebaseService(http,ServiceParamEnvironment.PROD_FIREBASE);
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
