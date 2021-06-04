import { Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.css'],
  styles: [`
  
:host::ng-deep .carousel-control-prev{
    margin-left: -10%;
  }
  
:host::ng-deep .carousel-control-next {
    margin-right: -10%;
  }
  :host::ng-deep .carousel-indicators {
    margin-bottom: -2%;
  } 
  :host::ng-deep * {
    border:none;
    outline: none;
 }
 :host::ng-deep .carousel-caption *{
   font-size: 1.5em;
 }


`]
})


export class DetailspageComponent implements OnInit {

  public buttonName = "Add to watchlist";
  public currentButtonAction = 1;
  public mobile = false;
  public retreivecategory:any;
  public retreiveid:any;
  public videoId:any;
  public searchDetail = {title: "", genres: "", spoken_languages: "", release_date: "", runtime: "",
                        overview: "", vote_average: "", tagline: "", poster_path:""};
  public castInfo = {birthday: "", gender:"", name:"", homepage:"", also_known_as:"", known_for_department: "", 
  biography:"", profile_path: "", place_of_birth:""};
  public checkcastShow = {birthday: false, gender:false, name:false, homepage:false, also_known_as:false, 
  known_for_department: false, biography:false, profile_path: false, place_of_birth:false};
  public castLinkInfo = {imdb_id: "", facebook_id:"", instagram_id:"", twitter_id:""};
  public checkLinkInfo = {imdb_id: false, facebook_id:false, instagram_id:false, twitter_id:false};
  public retrieveResult:any;
  //public test:Array<CastInfo> = [];
  public currentAction = 1;
  public currentKey = "";
  public twitterText = "";
  public facebookText = "";

  successMessage = '';
  typeName = 'success';
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert | undefined;
  private _success = new Subject<string>();

  public cards:Array<{ id: string, name: string, character:string,  profile_path:string}> = [];
  public reviewsNumber = 0;
  public reviews:Array<{ author: string, content: string, created_at:string, url:string, rating:string, avatar_path:string}> = [];
  public showReviews = true;
  public recommend:Array<{ id: string, title: string, poster_path:string}> = [];
  public gamesFormatted:Array<Array<{ id: string, title: string, poster_path:string}>> = [];
  public showRecommend = true;
  public similar:Array<{ id: string, title: string, poster_path:string}> = [];
  public similarFormatted:Array<Array<{ id: string, title: string, poster_path:string}>> = [];
  public showSimilar = true;

  constructor(private route: ActivatedRoute, private postsService: PostsService,
    private postsService1:PostsService, private routerDetails: Router) { 
      this.routerDetails.routeReuseStrategy.shouldReuseRoute = () => false; 
    }

  ngOnInit(): void {
    if (window.screen.width <= 425) { // 768px portrait
      this.mobile = true;
    }
    else{
      this.mobile = false;
    }

    
    
    
    this.retreivecategory = this.route.snapshot.paramMap.get('media_type');
    this.retreiveid = this.route.snapshot.paramMap.get('id');
    //if(this.retreivecategory == "movie"){
      //console.log("movie");
      this.postsService.getMovieVideo(this.retreiveid).subscribe(res=>{
        //console.log(res);
        this.videoId = res;
        this.postsService.getMovieDetailExpand(this.retreiveid).subscribe(res=>{
          //this.videoId = res;
         
          this.retrieveResult = res;
          this.searchDetail = this.retrieveResult;
  
          //make twitter
          console.log(this.videoId);
          this.twitterText = "hashtags=" + encodeURIComponent("USC,CSCI571,FightOn") +
          "&text=" + encodeURIComponent("Watch " + this.searchDetail.title) + 
          "&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + String(this.videoId));
          this.facebookText = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent("https://www.youtube.com/watch?v=" + String(this.videoId));
  
          //check if it has been added
          let listidarray = localStorage.getItem("idWatchSet");
          if(listidarray != null){
            let currid = "m" + this.retreiveid;
            let setid = []
            setid = JSON.parse(String(listidarray));
            //check if it is has shown before
            let checkifhas = -1;
            for(var i = 0; i < setid.length; i++){
              if(setid[i] === currid){
                checkifhas = i;
                this.buttonName = "Remove from watchlist";
                this.currentButtonAction = 0;
                break;
              }
            }
  
          }
          //add to continue watch
          //find id set
          //create poster set
          let tempidarray = localStorage.getItem("idContinueSet");
          let tempposterarray = localStorage.getItem("posterContinueSet");
          if(tempidarray == null){
            let currid = "m" + this.retreiveid;
            let setid = [];
            let setposter = [];
            setid.push(currid);
            setposter.push(this.searchDetail.poster_path +","+ this.searchDetail.title);
            localStorage.setItem("idContinueSet", JSON.stringify(setid));
            localStorage.setItem("posterContinueSet", JSON.stringify(setposter));
          }
          else{
            let currid = "m" + this.retreiveid;
            let setid = []
            let setposter = [];
            setid = JSON.parse(String(tempidarray));
            setposter = JSON.parse(String(tempposterarray));
            //check if it is has shown before
            let checkifhas = -1;
            for(var i = 0; i < setid.length; i++){
              if(setid[i] == currid){
                checkifhas = i;
                break;
              }
            }
            //if has, remove it
            if(checkifhas != -1){
              setid.splice(checkifhas, 1);
              setposter.splice(checkifhas, 1);
            }
            //check array is above 24
            if(setid.length >= 24){
              setid.splice(0, 1);
              setposter.splice(0, 1);
            }
            //add it again
            setid.push(currid);
            console.log("TESTHERE");
            let thispost = this.searchDetail.poster_path +","+ this.searchDetail.title;
            setposter?.push(thispost);
            localStorage.setItem("idContinueSet", JSON.stringify(setid));
            localStorage.setItem("posterContinueSet", JSON.stringify(setposter));
          }
        });
      });
      

      this.postsService.getMovieCast(this.retreiveid).subscribe(res=>{
        this.retrieveResult = res;
        //console.log(this.cards[0]);
        
        for(var i = 0; i < this.retrieveResult.length; i++)
        {
          this.cards.push({id: this.retrieveResult[i].id, 
            name: this.retrieveResult[i].name, 
            character: this.retrieveResult[i].character, 
            profile_path:this.retrieveResult[i].profile_path});
        }
        //console.log(this.cards);
      });

      this.postsService.getMovieReview(this.retreiveid).subscribe(res=>{
        this.retrieveResult = res;
        this.reviewsNumber = this.retrieveResult[0].total_result;
        console.log(this.retrieveResult);
        if(this.reviewsNumber > 0){
          this.showReviews = false;
          for(var i = 0; i < this.retrieveResult[1].results.length; i++){
            this.reviews.push({
              author: this.retrieveResult[1].results[i].author,
              content: this.retrieveResult[1].results[i].content,
              created_at: this.retrieveResult[1].results[i].created_at,
              url: this.retrieveResult[1].results[i].url,
              rating: this.retrieveResult[1].results[i].rating,
              avatar_path: this.retrieveResult[1].results[i].avatar_path
            });
          }
        }
        else{
          this.showReviews = true;
        }
      });

      this.postsService.getMovieRecommend(this.retreiveid).subscribe(res=>{
        this.retrieveResult = res;
        if(this.retrieveResult.length == 0){
          this.showRecommend = true;
        }
        else{
          this.showRecommend = false;
          for(var i = 0; i < this.retrieveResult.length; i++){
            this.recommend.push({
              id:this.retrieveResult[i].id,
              title: this.retrieveResult[i].title,
              poster_path: this.retrieveResult[i].poster_path
            });
          }
          var j = -1;
          for (var i = 0; i < this.recommend.length; i++) {
          if (i % 6 == 0) {
              j++;
              this.gamesFormatted[j] = [];
              this.gamesFormatted[j].push(this.recommend[i]);
          }
          else {
              this.gamesFormatted[j].push(this.recommend[i]);
          }
          }
        }
      });

      this.postsService.getMovieSimilar(this.retreiveid).subscribe(res=>{
        this.retrieveResult = res;
        if(this.retrieveResult.length == 0){
          this.showSimilar = true;
        }
        else{
          this.showSimilar = false;
          for(var i = 0; i < this.retrieveResult.length; i++){
            this.similar.push({
              id:this.retrieveResult[i].id,
              title: this.retrieveResult[i].title,
              poster_path: this.retrieveResult[i].poster_path
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
      
    //}

    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }
  
  /*accessStorage(element:any){
    //now adding
    console.log(element.textContent);
    if(this.currentAction === 1){
      element.textContent = "Remove from Watchlist"
      this.currentKey = "w" + localStorage.length;
      localStorage.setItem(this.currentKey, JSON.stringify(this.searchDetail));
      this.currentAction = 0;
      console.log(localStorage.length);
    }
    //now delete
    else{
      element.textContent = "Add to Watchlist"
      localStorage.removeItem(this.currentKey);
      this.currentAction = 1;
      console.log(localStorage.length);
    }
  }*/
  
  public changeSuccessMessage(element:any){ 
    if(this.currentButtonAction === 1){
      element.textContent = "Remove from Watchlist"
      /*this.currentKey = "w" + this.retreiveid;
      localStorage.setItem(this.currentKey, JSON.stringify({id: this.retreiveid, 
        poster_path: this.searchDetail.poster_path,
        type: "movie"}));*/
        //add to continue watch
        //find id set
        //create poster set
        let tempidarray = localStorage.getItem("idWatchSet");
        let tempposterarray = localStorage.getItem("posterWatchSet");

          let currid = "m" + this.retreiveid;
          let setid = [];
          let setposter = [];
          setid = JSON.parse(String(tempidarray));
          setposter = JSON.parse(String(tempposterarray));
          if(setid == null){
            setid = [];setposter = [];
          }
          setid?.push(currid);
          setposter?.push(this.searchDetail.poster_path +","+ this.searchDetail.title);
          console.log(setid);
          localStorage.setItem("idWatchSet", JSON.stringify(setid));
          localStorage.setItem("posterWatchSet", JSON.stringify(setposter));
      this.currentButtonAction = 0;
      this._success.next(`Added to watch list`);
      this.typeName = "success";
    }
    else{
      element.textContent = "Add to Watchlist"
      this._success.next(`Removed from watch list`);
      //localStorage.removeItem(this.currentKey);
      let tempidarray = localStorage.getItem("idWatchSet");
      let tempposterarray = localStorage.getItem("posterWatchSet");
      let currid = "m" + this.retreiveid;
          let setid = []
          let setposter = [];
          setid = JSON.parse(String(tempidarray));
          setposter = JSON.parse(String(tempposterarray));
      let checkifhas = -1;
          for(var i = 0; i < setid.length; i++){
            if(setid[i] == currid){
              checkifhas = i;
              break;
            }
          }
          //if has, remove it
          if(checkifhas != -1){
            setid.splice(checkifhas, 1);
            setposter.splice(checkifhas, 1);
          }
          localStorage.setItem("idWatchSet", JSON.stringify(setid));
          localStorage.setItem("posterWatchSet", JSON.stringify(setposter));
      this.currentButtonAction = 1;
      this.typeName = "danger";
    }
  }

  public accessCastDetail(element:string){
    this.postsService1.getMovieCastDetail(element).subscribe(res=>{
      this.retrieveResult = res;
      //console.log(this.retrieveResult);
      this.castInfo =
      {birthday: this.retrieveResult.birthday, 
          gender: this.retrieveResult.gender, 
          name: this.retrieveResult.name, 
          homepage: this.retrieveResult.homepage, 
          also_known_as: this.retrieveResult.also_known_as, 
          known_for_department: this.retrieveResult.known_for_department, 
          biography: this.retrieveResult.biography, 
          profile_path: this.retrieveResult.profile_path,
          place_of_birth: this.retrieveResult.place_of_birth};

      this.checkcastShow.birthday = (this.castInfo.birthday == "");

      this.checkcastShow.gender = (this.castInfo.gender == "");
      
      this.checkcastShow.name = (this.castInfo.name == "");

      this.checkcastShow.homepage = (this.castInfo.homepage == "");

      this.checkcastShow.also_known_as = (this.castInfo.also_known_as == "");

      this.checkcastShow.known_for_department = (this.castInfo.known_for_department == "");

      this.checkcastShow.biography = (this.castInfo.biography == "");

      this.checkcastShow.profile_path = (this.castInfo.profile_path == "");

      this.checkcastShow.place_of_birth = (this.castInfo.place_of_birth == "");


    
    });
    this.postsService1.getMovieCastExternalID(element).subscribe(res=>{
      this.retrieveResult = res;
      this.castLinkInfo = {
        imdb_id: this.retrieveResult.imdb_id, 
        facebook_id:this.retrieveResult.facebook_id, 
        instagram_id:this.retrieveResult.instagram_id, 
        twitter_id:this.retrieveResult.twitter_id
      };
      console.log(this.castLinkInfo);
      this.checkLinkInfo.imdb_id = (this.castLinkInfo.imdb_id == "");
      this.checkLinkInfo.facebook_id = (this.castLinkInfo.facebook_id == "");
      this.checkLinkInfo.instagram_id = (this.castLinkInfo.instagram_id == "");
      this.checkLinkInfo.twitter_id = (this.castLinkInfo.twitter_id == "");
    });
  }
  routeToDetail(element:string){
    this.routerDetails.navigate(["watch", "movie", parseInt(element)]);
    //window.location.reload();
  }
    
  }