import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import {PostsService} from '../../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-currentmovie',
  templateUrl: './currentmovie.component.html',
  styleUrls: ['./currentmovie.component.css'],
})
export class CurrentmovieComponent{
  constructor(private postsService: PostsService, private routerDetails: Router) { }
  public Allresults:any = [];
  //public images:any = [];
  //public titles:any = [];
  //public ids:any = [];
  public routerLinkArray:any = [];

  ngOnInit(): void {
    this.fetchAllData();
  }
  fetchAllData(){
    this.postsService.getCurrentMovie().subscribe(res =>{
      this.Allresults = res;
      //console.log(this.Allresults[0].name);
      //this.images = [this.Allresults[0].path, this.Allresults[1].path, this.Allresults[2].path, this.Allresults[3].path, this.Allresults[4].path];
      //this.titles = [this.Allresults[0].name, this.Allresults[1].name, this.Allresults[2].name, this.Allresults[3].name, this.Allresults[4].name];
      //this.ids = [this.Allresults[0].id, this.Allresults[1].id, this.Allresults[2].id, this.Allresults[3].id, this.Allresults[4].id];
      for(var i = 0 ; i < 5; i++)
      {
        //this.images = this.Allresults[0].path;
        //this.routerLinkArray[i] = "watch/movie/" + this.ids[i];
        //console.log(this.routerLinkArray[i]);
        this.routerLinkArray.push(
          {images: this.Allresults[i].path,
          titles: this.Allresults[i].name,
          ids: this.Allresults[i].id,
          rous: "watch/movie/" + this.Allresults[i].id})
      }
    });

  }
  //images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);
  

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel: any;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  routeToDetail(element:string){
    this.routerDetails.navigate(["watch", "movie", parseInt(element)]);
    //window.location.reload();
  }
}

