import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class StockService {

  private url = 'https://tracking-my-portfolio-8260e.firebaseio.com/data.json';

  constructor(private http: Http) { }


  create(name: any): Promise<any> {
	//console.log("name " + name);
	//console.log("name string " + JSON.stringify({name: name}));
    return this.http
      //.post(this.heroesUrl, JSON.stringify({name: name}))
	  .post(this.url, {name: name})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
