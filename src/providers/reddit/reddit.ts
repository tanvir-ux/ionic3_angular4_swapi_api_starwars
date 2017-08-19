import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RedditProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RedditProvider {

	url: string = 'https://swapi.co/api/people';
	



  constructor(public http: Http) {
    console.log('Hello RedditProvider Provider');
  }


  getMovies(){
  	return this.http.get(this.url)
  					.map(res => res.json());
  }


  getNext(next){
  	
  	return this.http.get(next)
  				.map(res => res.json());

  }

}
