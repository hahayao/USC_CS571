import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../services/posts.service'
import { Router } from '@angular/router';
import { JsonpClientBackend } from '@angular/common/http';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
 
})
export class HomepageComponent implements OnInit {

  constructor(private routerDetails: Router, private postsService: PostsService) { this.routerDetails.routeReuseStrategy.shouldReuseRoute = () => false;}
  public watch:Array<{ id: string, title: string, poster_path:string, type:string}> = [];
  public watchFormatted:Array<Array<{ id: string, title: string, poster_path:string, type:string}>> = [];
  public showContinue = true;
  public retrieveResult:any;
  public similar:Array<{ id: string, title: string, poster_path:string, type:string}> = [];
  public similarFormatted:Array<Array<{ id: string, title: string, poster_path:string,  type:string}>> = [];
  public showSimilar = true;

  public popular:Array<{ id: string, title: string, poster_path:string, type:string}> = [];
  public popularFormatted:Array<Array<{ id: string, title: string, poster_path:string, type:string}>> = [];
  public showpopular = true;

  public trending:Array<{ id: string, title: string, poster_path:string, type:string}> = [];
  public trendingFormatted:Array<Array<{ id: string, title: string, poster_path:string, type:string}>> = [];
  public showtrending = true;

  public tvpopular:Array<{ id: string, title: string, poster_path:string, type:string}> = [];
  public tvpopularFormatted:Array<Array<{ id: string, title: string, poster_path:string, type:string}>> = [];
  public tvshowpopular = true;

  public tvtop:Array<{ id: string, title: string, poster_path:string, type:string}> = [];
  public tvtopFormatted:Array<Array<{ id: string, title: string, poster_path:string, type:string}>> = [];
  public tvshowtop = true;

  public tvtrending:Array<{ id: string, title: string, poster_path:string, type:string}> = [];
  public tvtrendingFormatted:Array<Array<{ id: string, title: string, poster_path:string, type:string}>> = [];
  public tvshowtrending = true;

  ngOnInit(): void {
    //this.fetchData();
    //continue watch
    let storeidarray = localStorage.getItem("idContinueSet");;
    let storepatharray = localStorage.getItem("posterContinueSet");
    if(storeidarray == null){
      this.showContinue = true;
    }
    else{
      let setid = []
      let setposter = [];
      setid = JSON.parse(String(storeidarray));
      setposter = JSON.parse(String(storepatharray));
      for(var i = setid.length - 1; i >= 0; i--){
        let thistype = "";
        if(setid[i].charAt(0)== "t"){
          thistype = "tv";
        }
        else{
          thistype = "movie";
        }
        let thisid = setid[i].substring(1);
        console.log(thistype + "truncate" + thisid);
        let thispath = setposter[i].split(',')[0];
        let thisname = setposter[i].split(',')[1];
        this.watch.push({type: thistype, title: thisname, poster_path: thispath, id: thisid});
      }
    }
    console.log(this.watch);
    if(this.watch.length == 0){
      this.showContinue = true;
    }
    else{
      this.showContinue = false;
      var j = -1;
          for (var i = 0; i < this.watch.length; i++) {
          if (i % 6 == 0) {
              j++;
              this.watchFormatted[j] = [];
              this.watchFormatted[j].push(this.watch[i]);
          }
          else {
              this.watchFormatted[j].push(this.watch[i]);
          }
          
        }
    }

    this.postsService.getPopulerMovie().subscribe(res=>{
      this.retrieveResult = res;
      if(this.retrieveResult.length == 0){
        this.showSimilar = true;
      }
      else{
        this.showSimilar = false;
        for(var i = 0; i < this.retrieveResult.length; i++){
          this.similar.push({
            id:this.retrieveResult[i].id,
            title: this.retrieveResult[i].name,
            poster_path: this.retrieveResult[i].path,
            type: this.retrieveResult[i].type
          });
        }
        var j = -1;
        for (var i = 0; i < this.similar.length; i++) {
        if (i % 6 == 0) {
            j++;
            this.similarFormatted[j] = [];
            this.similarFormatted[j].push(this.similar[i]);
        }
        else {
            this.similarFormatted[j].push(this.similar[i]);
        }
        }
      }
    });

    this.postsService.getTopRatedMovie().subscribe(res=>{
      this.retrieveResult = res;
      if(this.retrieveResult.length == 0){
        this.showpopular = true;
      }
      else{
        this.showpopular = false;
        for(var i = 0; i < this.retrieveResult.length; i++){
          this.popular.push({
            id:this.retrieveResult[i].id,
            title: this.retrieveResult[i].name,
            poster_path: this.retrieveResult[i].path,
            type: this.retrieveResult[i].type
          });
        }
        var j = -1;
        for (var i = 0; i < this.popular.length; i++) {
        if (i % 6 == 0) {
            j++;
            this.popularFormatted[j] = [];
            this.popularFormatted[j].push(this.popular[i]);
        }
        else {
            this.popularFormatted[j].push(this.popular[i]);
        }
        }
      }
    });

    this.postsService.getTrendingMovie().subscribe(res=>{
      this.retrieveResult = res;
      if(this.retrieveResult.length == 0){
        this.showtrending = true;
      }
      else{
        this.showtrending = false;
        for(var i = 0; i < this.retrieveResult.length; i++){
          this.trending.push({
            id:this.retrieveResult[i].id,
            title: this.retrieveResult[i].name,
            poster_path: this.retrieveResult[i].path,
            type: this.retrieveResult[i].type
          });
        }
        var j = -1;
        for (var i = 0; i < this.trending.length; i++) {
        if (i % 6 == 0) {
            j++;
            this.trendingFormatted[j] = [];
            this.trendingFormatted[j].push(this.trending[i]);
        }
        else {
            this.trendingFormatted[j].push(this.trending[i]);
        }
        }
      }
    });
//popular tv
    this.postsService.getTVHome("popular").subscribe(res=>{
      this.retrieveResult = res;
      if(this.retrieveResult.length == 0){
        this.tvshowpopular = true;
      }
      else{
        this.tvshowpopular = false;
        for(var i = 0; i < this.retrieveResult.length; i++){
          this.tvpopular.push({
            id:this.retrieveResult[i].id,
            title: this.retrieveResult[i].name,
            poster_path: this.retrieveResult[i].poster_path,
            type: this.retrieveResult[i].type
          });
        }
        var j = -1;
        for (var i = 0; i < this.tvpopular.length; i++) {
        if (i % 6 == 0) {
            j++;
            this.tvpopularFormatted[j] = [];
            this.tvpopularFormatted[j].push(this.tvpopular[i]);
        }
        else {
            this.tvpopularFormatted[j].push(this.tvpopular[i]);
        }
        }
      }
    });
//top rated tv
this.postsService.getTVHome("top").subscribe(res=>{
  this.retrieveResult = res;
  if(this.retrieveResult.length == 0){
    this.tvshowtop = true;
  }
  else{
    this.tvshowtop = false;
    for(var i = 0; i < this.retrieveResult.length; i++){
      this.tvtop.push({
        id:this.retrieveResult[i].id,
        title: this.retrieveResult[i].name,
        poster_path: this.retrieveResult[i].poster_path,
        type: this.retrieveResult[i].type
      });
    }
    var j = -1;
    for (var i = 0; i < this.tvtop.length; i++) {
    if (i % 6 == 0) {
        j++;
        this.tvtopFormatted[j] = [];
        this.tvtopFormatted[j].push(this.tvtop[i]);
    }
    else {
        this.tvtopFormatted[j].push(this.tvtop[i]);
    }
    }
  }
});

//trending tv
this.postsService.getTVHome("trending").subscribe(res=>{
  this.retrieveResult = res;
  if(this.retrieveResult.length == 0){
    this.tvshowtrending = true;
  }
  else{
    this.tvshowtrending = false;
    for(var i = 0; i < this.retrieveResult.length; i++){
      this.tvtrending.push({
        id:this.retrieveResult[i].id,
        title: this.retrieveResult[i].name,
        poster_path: this.retrieveResult[i].poster_path,
        type: this.retrieveResult[i].type
      });
    }
    var j = -1;
    for (var i = 0; i < this.tvtrending.length; i++) {
    if (i % 6 == 0) {
        j++;
        this.tvtrendingFormatted[j] = [];
        this.tvtrendingFormatted[j].push(this.tvtrending[i]);
    }
    else {
        this.tvtrendingFormatted[j].push(this.tvtrending[i]);
    }
    }
  }
});


  }


  /*fetchData(){
    this.postsService.getAllPost().subscribe(res =>{
      this.posts = res;
    });
  }*/

  routeToDetail(element:string){
    var getType = "";
    if(element[0] == "t"){
      getType = "tv"
    }
    else{
      getType = "movie";
    }
    var getID = element.substring(1);
    console.log(element);
    this.routerDetails.navigate(["watch", getType, getID]);
    //window.location.reload();
  }
}
