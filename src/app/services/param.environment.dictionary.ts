import { Dictionary }  from './dictionary';
import { ParamEnvironment }  from './param.environment';
import { ServiceImplEnum }       from './service.impl.enum';
import { FPRODUCTION,FTEST_PRODUCTION,FDEVELOPMENT }  from './params.firebase';


const baseKeyProd: number = ServiceImplEnum.PRODUCTION;
const baseKeyTestProd: number = ServiceImplEnum.TESTPRODUCTION;
const baseKeyDev: number = ServiceImplEnum.DEVELOPMENT;

const firebaseKeyProd: string = baseKeyProd + ServiceImplEnum[ServiceImplEnum.FIREBASE];
//console.log("firebaseKeyProd " + firebaseKeyProd);
const firebaseKeyTestProd: string = baseKeyTestProd + ServiceImplEnum[ServiceImplEnum.FIREBASE];
//console.log("firebaseKeyTestProd " + firebaseKeyTestProd);
const firebaseKeyDev: string = baseKeyDev + ServiceImplEnum[ServiceImplEnum.FIREBASE];
//console.log("firebaseKeyDev " + firebaseKeyDev);

let items: { [index: string]: ParamEnvironment } = {
    [this.index = firebaseKeyProd]: FPRODUCTION,
    [this.index = firebaseKeyTestProd]: FTEST_PRODUCTION,
    [this.index = firebaseKeyDev]: FDEVELOPMENT,
};
export const PARAM_ENVIRONMENT_DICTIONARY = new Dictionary<ParamEnvironment>(items);
 

                  