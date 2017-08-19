import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { RedditProvider } from '../../providers/reddit/reddit';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	news: any = [];
	newNews: any = [];
	next: string;
	

  constructor(public navCtrl: NavController,
   public reddit: RedditProvider,public loadingCtrl: LoadingController) {

  }

  ionViewDidLoad(){

  	
  	this.loadMovies();


  }



  loadMovies(){
  	this.reddit.getMovies()
  				.subscribe((data) => {
  					this.news = data.results;
  					// console.log(data);
  					// console.log(this.news);
  					// console.log(data.next);
  					this.next = data.next;

  				})
  }

  loadNext(){
  	this.reddit.getNext(this.next)
  				.subscribe((results) => {
  					console.log(results.results);
  					this.newNews = results.results;
  					this.news = this.newNews.concat(this.news);
  					this.next = results.next;
  					
  				})

  	this.presentLoadingBubbles();			

  }


  presentLoadingBubbles() {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Loading ...',
      duration: 1000
     
    });

    loading.present();




  }



}
