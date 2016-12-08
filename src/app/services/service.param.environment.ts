import { ParamEnvironment }  from './param.environment';
import { FPRODUCTION,FTEST_PRODUCTION,FDEVELOPMENT }  from './params.firebase';


export class ServiceParamEnvironment{
    
  static PROD_FIREBASE = FPRODUCTION
  static TEST_PROD_FIREBASE = FTEST_PRODUCTION
  static DEV_FIREBASE = FDEVELOPMENT

}