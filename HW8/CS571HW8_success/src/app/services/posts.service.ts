import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  //public url_base = "http://localhost:8080";
  public url_base = "https://yaoyuan333.wm.r.appspot.com";
  //public url_base = "";
  constructor(private httpClient: HttpClient) { }

  getAllPost(){
    let URL = this.url_base+"/apis/posts";
    return this.httpClient.get(URL);
  }

  getAllSearch(keyword:string){
    let URL = this.url_base+"/apis/navSearch/" + keyword;
    //var test = this.httpClient.get<any[]>(URL);
    //console.log("test");
    //console.log(test);
    //return this.httpClient.get<any[]>(URL).pipe(map(response=>response[1]));
    return this.httpClient.get<any[]>(URL);
  }

  getCurrentMovie(){
    let URL = this.url_base+"/apis/currentMovie";
    //URL = "https://hw8test-310018.wl.r.appspot.com/currentMovie";
    return this.httpClient.get(URL);
  }

  getMovieVideo(id:string){
    let URL = this.url_base+"/apis/movieDetail/" + id;
    //URL = "https://hw8test-310018.wl.r.appspot.com/movieDetail";
    return this.httpClient.get(URL);
  }

  getTVVideo(id:string){
    let URL = this.url_base+"/apis/tvDetail/" + id;
    //URL = "https://hw8test-310018.wl.r.appspot.com/movieDetail";
    return this.httpClient.get(URL);
  }

  getMovieDetailExpand(id:string){
    let URL = this.url_base+"/apis/movieDetailExpand/" + id;
    return this.httpClient.get(URL);
  }

  getTVDetailExpand(id:string){
    let URL = this.url_base+"/apis/tvDetailExpand/" + id;
    return this.httpClient.get(URL);
  }

  getMovieCast(id:string){
    let URL = this.url_base+"/apis/movieCast/" + id;
    return this.httpClient.get(URL);
  }

  getTVCast(id:string){
    let URL = this.url_base+"/apis/tvCast/" + id;
    return this.httpClient.get(URL);
  }

  getMovieCastDetail(id:string){
    let URL = this.url_base+"/apis/movieCastDetail/" + id;
    return this.httpClient.get(URL);
  }

  getMovieCastExternalID(id:string){
    let URL = this.url_base+"/apis/movieCastExternID/" + id;
    return this.httpClient.get(URL);
  }

  getMovieReview(id:string){
    let URL = this.url_base+"/apis/movieReview/" + id;
    return this.httpClient.get(URL);
  }

  getTVReview(id:string){
    let URL = this.url_base+"/apis/tvReview/" + id;
    return this.httpClient.get(URL);
  }

  getMovieRecommend(id:string){
    let URL = this.url_base+"/apis/movieRecommend/" + id;
    return this.httpClient.get(URL);
  }

  getTVRecommend(id:string){
    let URL = this.url_base+"/apis/tvRecommend/" + id;
    return this.httpClient.get(URL);
  }

  getMovieSimilar(id:string){
    let URL = this.url_base+"/apis/movieSimilar/" + id;
    return this.httpClient.get(URL);
  }

  getTVSimilar(id:string){
    let URL = this.url_base+"/apis/tvSimilar/" + id;
    return this.httpClient.get(URL);
  }

  getPopulerMovie(){
    let URL = this.url_base+"/apis/popularmovie";
    return this.httpClient.get(URL);
  }

  getTopRatedMovie(){
    let URL = this.url_base + "/apis/topRatedMovie";
    return this.httpClient.get(URL);
  }

  getTrendingMovie(){
    let URL = this.url_base + "/apis/trendingMovie";
    return this.httpClient.get(URL);
  }

  getTVHome(searchwhat:string){
    let URL = this.url_base + "/apis/tvhome/" + searchwhat;
    return this.httpClient.get(URL);
  }
}
