import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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
