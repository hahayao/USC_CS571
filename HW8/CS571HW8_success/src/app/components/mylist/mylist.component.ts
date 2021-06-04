import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {

  constructor(private routerDetails: Router) { this.routerDetails.routeReuseStrategy.shouldReuseRoute = () => false;}
  public watch:Array<{ id: string, title: string, poster_path:string, type:string}> = [];
  public watchFormatted:Array<Array<{ id: string, title: string, poster_path:string, type:string}>> = [];
  public showWatch = true;
  ngOnInit(): void {
    let storeidarray = localStorage.getItem("idWatchSet");;
    let storepatharray = localStorage.getItem("posterWatchSet");
    if(storeidarray == null){
      this.showWatch = true;
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
        let thispath = setposter[i].split(',')[0];
        let thisname = setposter[i].split(',')[1];
        this.watch.push({type: thistype, title: thisname, poster_path: thispath, id: thisid});
      }
    }
    console.log(this.watch);
    if(this.watch.length == 0){
      this.showWatch = false;
    }
    else{
      this.showWatch = true;
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
    console.log(this.watchFormatted);
  }

  routeToDetail(element:string){
    var getType = "";
    if(element[0] == "t"){
      getType = "tv"
    }
    else{
      getType = "movie";
    }
    var getID = element.substring(1);
    console.log(getID);
    this.routerDetails.navigate(["watch", getType, getID]);
    //window.location.reload();
  }

}
