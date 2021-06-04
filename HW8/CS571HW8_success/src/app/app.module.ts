import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MylistComponent } from './components/mylist/mylist.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrentmovieComponent } from './components/currentmovie/currentmovie.component';
import { DetailspageComponent } from './components/detailspage/detailspage.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { TcdetailComponent } from './components/tcdetail/tcdetail.component';
import { HomecarouselComponent } from './components/homecarousel/homecarousel.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MylistComponent,
    NavbarComponent,
    CurrentmovieComponent,
    DetailspageComponent,
    TcdetailComponent,
    HomecarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    YouTubePlayerModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
