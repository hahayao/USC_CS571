import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MylistComponent } from './components/mylist/mylist.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailspageComponent } from './components/detailspage/detailspage.component';
import {TcdetailComponent} from './components/tcdetail/tcdetail.component';

const routes: Routes = [
  {path:'', 
  component:HomepageComponent
  },
  /*{
    path:'posts', 
    children:[
      {path: '', component:HomepageComponent},
      {path: ':id', component:HomepageComponent}
    ]
  },*/
  {path:'mylist', component:MylistComponent},
  /*{path:'navSearch', 
  children:[
    {path: ':keyword', component:NavbarComponent}
  ]},
  {
    path:'currentMovie', 
    component:NavbarComponent
  },*/
  {
    path:'watch/movie/:id', 
    component:DetailspageComponent
  },
  {
    path:'watch/tv/:id', 
    component:TcdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
