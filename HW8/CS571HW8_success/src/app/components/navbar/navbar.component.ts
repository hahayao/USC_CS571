import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import {Observable, of, OperatorFunction} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';
import {PostsService} from '../../services/posts.service'


/*export class NavbarComponent{
  public searchInput:string = '';;
  public  retreiveResult:any = [];
  constructor(private postsService: PostsService) { }
  
  fetchData(){
    this.postsService.getAllSearch(this.searchInput).subscribe(res =>{
      this.retreiveResult = res;
      console.log("here");
    });
  }

  fetchSeries(event: any):any{
    if (event.target.value === '') {
      return this.retreiveResult = [];
    }
    this.postsService.getAllSearch(this.searchInput).subscribe(res =>{
      this.retreiveResult = (res as any).results;
      console.log(this.retreiveResult);
      return 1;
    });
    return 0;
  }
}*/


/*@Injectable()
export class NavBarSearchService {
  constructor(private postsService: PostsService) { }
  search(term: string) {
    //var results:Observable<any[]>;
    if (term === '') {
      return of([]);
    }

      this.postsService.getAllSearch(term).subscribe(result=>
        {
          console.log(result[0]);
          if(result[0] == null)
          {
            console.log("researching nul");
            return of([]);
          }
          else{
            return this.postsService.getAllSearch(term);
            //results = result;
            //return result;
          }
    }  
  );
   return this.postsService.getAllSearch(term)
    //.pipe(map(response => response[1]))
    //;
  }
}*/

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  //providers: [NavBarSearchService],
  styles: [`.form-control { width: 20%; }
  :host::ng-deep .dropdown-menu, navbar .dropdown-menu {
    background-color: rgb(5, 8, 41);
    color: white;
  }`]
})

/*@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  //providers: [NavBarSearchService],
  styles: [`.form-control { width: 500px; }`]
})*/
export class NavbarComponent {
  public model: any;
  searching = false;
  public searchFailed = false;
  constructor(private _service: PostsService, private routerDetails: Router) {}
  /*search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(term =>
        this._service.search(term))
    )
    formatter = (x: {name: any}) => x.name;
  //constructor(private postsService: PostsService) { }
}*/


//function call backend
  /*search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(term =>
        this._service.search(term))
    )*/
  
  //last edit
    search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(term =>
        this.searchGetCall(term)
        .pipe(

          //tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            console.log("ERROR");
            return of([]);
          }))
      ),
      //tap(() => this.searching = false)

    )

    searchGetCall(term: string) {

      if (term === '') {
        return of([]);
      }
      return this._service.getAllSearch(term)
      .pipe(
        map((response) => {
          console.log(response[0]);
          if(response[0] == null){
            console.log("here");
            this.searchFailed = true;
            return response[0];
          }
          return response;
        })
      );
    }
    formatter = (x: {name: any}) => x.name;

    setModel(e: NgbTypeaheadSelectItemEvent) {
      e.preventDefault();
      this.model = e.item.name;
      console.log(e.item.name);
      this.routerDetails.navigate(["watch", e.item.type, parseInt(e.item.id)]);
      

      //location.reload();
    }

    clickedHighlight(event:any){
      event.target.classList.add('active'); // To ADD
      
    }
  
}

    /*search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(term =>
        this.postsService.getAllSearch(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      //tap(() => this.searching = false)

    )

  formatter = (x: {name: any}) => x.name;*/



