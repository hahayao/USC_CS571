//
//  DetailModel.swift
//  USC Film
//
//  Created by Ha Ha on 4/26/21.
//

import Foundation
import SwiftUI
import Combine
import Alamofire
import SwiftyJSON

class DetailModel: ObservableObject{
    @Published var count = 0
    @Published var temp_trailer_path: String? = nil
    @Published var temp_name: String? = nil
    @Published var temp_date_genre_path: String? = nil
    @Published var temp_rating: String? = nil
    @Published var temp_description: String? = nil
    @Published var temp_cast: [CastInfo]? = nil
    @Published var temp_review: [ReviewInfo]? = nil
    @Published var recommend: [homeCard]? = nil
    init(){
        self.count = 0
        self.temp_trailer_path = nil
        self.temp_name = nil
        self.temp_date_genre_path = nil
        self.temp_rating = nil
        self.temp_description = nil
        self.temp_cast = nil
        self.temp_review = nil
        self.recommend = nil
    }
    func fectchDatail(cur_id: String, cur_type: String){
        self.count = 0
        self.temp_trailer_path = nil
        self.temp_name = nil
        self.temp_date_genre_path = nil
        self.temp_rating = nil
        self.temp_description = nil
        self.temp_cast = nil
        self.temp_review = nil
        self.recommend = nil
        
        let url = localServerURL
        var tempurl = ""
        
        
        //temp_trailer_path
        if(cur_type == "MOVIE"){
            tempurl = url + "/movieDetail/" + cur_id
        }
        else{
            tempurl = url + "/tvDetail/" + cur_id
        }
        AF.request(tempurl, encoding:JSONEncoding.default).responseJSON { response in
            switch response.result
            {
            case .success(let value):
                let jsondata = JSON(value)
                DispatchQueue.main.async {
                    if(self.temp_trailer_path == nil){
                        self.temp_trailer_path = jsondata.stringValue
                        self.count = self.count + 1
                    }
                }
                break
            case .failure(let error):
                print(error)
                break
            // do something with the error
            }
        }
        
        //temp_name & temp_date_genre_path & temp_rating & temp_description
        if(cur_type == "MOVIE"){
            tempurl = url + "/movieDetailExpand/" + cur_id
        }
        else{
            tempurl = url + "/tvDetailExpand/" + cur_id
        }
        
        AF.request(tempurl, encoding:JSONEncoding.default).responseJSON { response in
            switch response.result
            {
            case .success(let value):
                let jsondata = JSON(value)
                DispatchQueue.main.async {
                    if(self.temp_name == nil){
                        self.temp_name = jsondata["title"].stringValue
                        self.count = self.count + 1
                    }
                    if(self.temp_date_genre_path == nil){
                        self.temp_date_genre_path = jsondata["release_date"].stringValue + " | " +  jsondata["genres"].stringValue
                        self.count = self.count + 1
                    }
                    if(self.temp_rating == nil){
                        self.temp_rating = jsondata["vote_average"].stringValue + "/5.0"
                        self.count = self.count + 1
                    }
                    if(self.temp_description == nil){
                        self.temp_description = jsondata["overview"].stringValue
                        self.count = self.count + 1
                    }
                }
                break
            case .failure(let error):
                print(error)
                break
            // do something with the error
            }
        }
        
        //temp_cast
        if(cur_type == "MOVIE"){
            tempurl = url + "/movieCast/" + cur_id
        }
        else{
            tempurl = url + "/tvCast/" + cur_id
        }
        AF.request(tempurl, encoding:JSONEncoding.default).responseJSON { response in
            switch response.result
            {
            case .success(let value):
                let jsondata = JSON(value)
                if(jsondata.isEmpty){
                    self.temp_cast = [CastInfo]()
                    self.count = self.count + 1
                }
                else{
                    var temp = [CastInfo]()
                    jsondata.forEach{eachjson in
                        temp.append(
                            CastInfo(castImagePath: eachjson.1["profile_path"].stringValue, id: eachjson.1["name"].stringValue
                        ))
                    }
                    DispatchQueue.main.async {
                        if(self.temp_cast == nil){
                            self.temp_cast = temp
                            self.count = self.count + 1
                        }
                    }
                }
                
                break
            case .failure(let error):
                print(error)
                break
            // do something with the error
            }
        }
        //temp_review
        if(cur_type == "MOVIE"){
            tempurl = url + "/movieReview/" + cur_id
        }
        else{
            tempurl = url + "/tvReview/" + cur_id
        }
        AF.request(tempurl, encoding:JSONEncoding.default).responseJSON { response in
            switch response.result
            {
            case .success(let value):
                let jsondata = JSON(value)
                if(jsondata.isEmpty){
                    self.temp_review = [ReviewInfo]()
                    self.count = self.count + 1
                }
                else{
                    var temp = [ReviewInfo]()
                    jsondata.forEach{eachjson in
                        temp.append(
                            ReviewInfo(id: eachjson.1["author"].stringValue,
                                       writtenDate: eachjson.1["created_at"].stringValue,
                                       starRate: eachjson.1["rating"].stringValue,
                                       review: eachjson.1["content"].stringValue
                            ))
                    }
                    DispatchQueue.main.async {
                        if(self.temp_review == nil){
                            self.temp_review = temp
                            self.count = self.count + 1
                        }
                    }
                }
                break
            case .failure(let error):
                print(error)
                break
            // do something with the error
            }
        }
        
        //recommend
        if(cur_type == "MOVIE"){
            tempurl = url + "/movieRecommend/" + cur_id
        }
        else{
            tempurl = url + "/tvRecommend/" + cur_id
        }
        AF.request(tempurl, encoding:JSONEncoding.default).responseJSON { response in
            switch response.result
            {
            case .success(let value):
                let jsondata = JSON(value)
                if(jsondata.isEmpty){
                    self.recommend = [homeCard]()
                    self.count = self.count + 1
                }
                else{
                    var temp = [homeCard]()
                    jsondata.forEach{eachjson in
                        temp.append(
                            homeCard(id: eachjson.1["id"].stringValue,
                                     name: eachjson.1["name"].stringValue,
                                     type: eachjson.1["type"].stringValue,
                                     path: eachjson.1["path"].stringValue,
                                     date: eachjson.1["date"].stringValue,
                                     url: eachjson.1["url"].stringValue)
                            )
                    }
                    DispatchQueue.main.async {
                        if(self.recommend == nil){
                            self.recommend = temp
                            self.count = self.count + 1
                        }
                    }
                }
                break
            case .failure(let error):
                print(error)
                break
            // do something with the error
            }
        }
        /*DispatchQueue.main.async {
            print("temp_trailer_path")
            print(temp_trailer_path)
            if(temp_trailer_path != nil &&
                temp_name != nil &&
               temp_date_genre_path != nil &&
               temp_rating != nil &&
               temp_description != nil &&
               temp_cast != nil &&
               //temp_review != nil &&
               temp_shareURL != nil
            ){
                self.detail = DetailInfo(
                    id: cur_id,
                    type: cur_type,
                    trailer_path: temp_trailer_path!,
                    name: temp_name!,
                    date_genre: temp_date_genre_path!,
                    rating: temp_rating!,
                    description: temp_description!,
                    cast: temp_cast!,
                    review: temp_review!,
                    shareURL: temp_shareURL!
                )
                print("finish")
                print(self.detail)
            }
            
        }*/
    }
}
