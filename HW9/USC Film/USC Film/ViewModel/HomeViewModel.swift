//
//  HomeViewModel.swift
//  USC Film
//
//  Created by Ha Ha on 4/24/21.
//

import Foundation
import SwiftUI
import Combine
import Alamofire
import SwiftyJSON

class HomeViewModel:ObservableObject{
    @Published var searchQuery = ""
    //use to cancel the search publisher when we need
    var searchCandellable: AnyCancellable? = nil
    
    @Published var fetchedSearchResult: [navSearch]? = nil
    //carousel
    @Published var fetchedNowPlayingMovieResult: [HomePage]? = nil
    @Published var fetchedTrendingTVResult: [HomePage]? = nil
    //top
    @Published var fetchedtopMovie: [homeCard]? = nil
    @Published var fetchedtopTV: [homeCard]? = nil
    //popular
    @Published var fetchedPopMovie: [homeCard]? = nil
    @Published var fetchedPopTV: [homeCard]? = nil
    
    init(){
        self.homePageLoad(choosetype: "MOVIE")
        self.homePageLoad(choosetype: "TV")
        self.homePageTopPop(choosetype: "MOVIE", catg: "TOP")
        self.homePageTopPop(choosetype: "MOVIE", catg: "POP")
        self.homePageTopPop(choosetype: "TV", catg: "TOP")
        self.homePageTopPop(choosetype: "TV", catg: "POP")
        
        searchCandellable = $searchQuery
            .removeDuplicates()
            //wait
            .debounce(for: 1, scheduler: RunLoop.main)
            .sink(receiveValue: {
                str in
                
                if str == ""{
                    //reset Data
                    self.fetchedSearchResult = nil
                }
                else if (str.count < 3){
                    self.fetchedSearchResult = nil
                }
                else{
                    self.searchNavBar()
                }
            })
    }
    
    func searchNavBar(){
        self.fetchedSearchResult = nil
        var searchreplace = searchQuery.replacingOccurrences(of: " ", with: "%20")
        var url = localServerURL + "/navSearch/" + searchreplace
        AF.request(url, encoding:JSONEncoding.default).responseJSON { response in
            switch response.result
            {
            case .success(let value):
                let jsondata = JSON(value)
                if(jsondata.isEmpty){
                    //no result
                    self.fetchedSearchResult = [navSearch]()
                }
                else{
                    var navSearchtempresult = [navSearch]()
                    jsondata.forEach{eachjson in
                        navSearchtempresult.append(
                            navSearch(id: eachjson.1["id"].stringValue,
                                        type: eachjson.1["type"].stringValue,
                                        name: eachjson.1["name"].stringValue,
                                        path: eachjson.1["path"].stringValue,
                                        vote_average: eachjson.1["vote_average"].stringValue,
                                        date: eachjson.1["date"].stringValue,
                                        watchlist_path: eachjson.1["watchlist_path"].stringValue)
                        )
                    }
                    
                    DispatchQueue.main.async {
                        if self.fetchedSearchResult == nil{
                            self.fetchedSearchResult = navSearchtempresult;
                        }
                    }
                }
                
                break
            case .failure(let error):
                print("ERROR")
                print(error)
                break
            // do something with the error
            }
        }
    }
    //carousel
    func homePageLoad(choosetype:String){
        var url = localServerURL;
        if(choosetype == "MOVIE"){
            url += "/currentMovie"
        }
        else{
            url += "/trendingTV"
        }
        AF.request(url, encoding:JSONEncoding.default).responseJSON { response in
            switch response.result
            {
            case .success(let value):
                let jsondata = JSON(value)
                
                
                var navhometempresult = [HomePage]()
                jsondata.forEach{eachjson in
                    navhometempresult.append(
                        HomePage(id: eachjson.1["id"].stringValue,
                                 type: eachjson.1["type"].stringValue,
                                 path: eachjson.1["path"].stringValue)
                    )
                }
                
                DispatchQueue.main.async {
                    if self.fetchedNowPlayingMovieResult == nil && choosetype == "MOVIE"{
                        self.fetchedNowPlayingMovieResult = navhometempresult;
                    }
                    if self.fetchedTrendingTVResult == nil && choosetype == "TV"{
                        self.fetchedTrendingTVResult = navhometempresult;
                    }
                }
                
                
                break
            case .failure(let error):
                print(error)
                break
            // do something with the error
            }
        }
    }
    //pop&top
    func homePageTopPop(choosetype:String, catg: String){
        var url = localServerURL;
        if(choosetype == "MOVIE" && catg == "POP"){
            url += "/popularmovie"
        }
        else if(choosetype == "MOVIE" && catg == "TOP"){
            url += "/topRatedMovie"
        }
        else if(choosetype == "TV" && catg == "POP"){
            url += "/tvhome/popular"
        }
        else{
            url += "/tvhome/top"
        }
        print(url)
        AF.request(url, encoding:JSONEncoding.default).responseJSON { response in
            switch response.result
            {
            case .success(let value):
                let jsondata = JSON(value)
                                
                var navhometempresult = [homeCard]()
                jsondata.forEach{eachjson in
                    navhometempresult.append(
                        homeCard(id: eachjson.1["id"].stringValue,
                                 name: eachjson.1["name"].stringValue,
                                 type: eachjson.1["type"].stringValue,
                                 path: eachjson.1["path"].stringValue,
                                 date: eachjson.1["date"].stringValue,
                                 url: eachjson.1["url"].stringValue)
                    )
                }
                
                DispatchQueue.main.async {
                    //print(navhometempresult);
                    
                        if(self.fetchedPopMovie == nil && choosetype == "MOVIE" && catg == "POP"){

                            self.fetchedPopMovie = navhometempresult;
                        }
                        if(self.fetchedtopMovie == nil && choosetype == "MOVIE" && catg == "TOP"){

                            self.fetchedtopMovie = navhometempresult;
                        }
                        if(self.fetchedPopTV == nil && choosetype == "TV" && catg == "POP"){

                            self.fetchedPopTV = navhometempresult;
                        }
                        if(self.fetchedtopTV == nil && choosetype == "TV" && catg == "TOP"){

                            self.fetchedtopTV = navhometempresult;
                        }
                }
                
                
                break
            case .failure(let error):
                print(error)
                break
            // do something with the error
            }
        }
    }
}
