//
//  navSearchModel.swift
//  USC Film
//
//  Created by Ha Ha on 4/24/21.
//

import Foundation

struct navSearch: Identifiable, Codable{
    var id: String
    var type: String
    var name: String
    var path: String
    var vote_average: String
    var date: String
    var watchlist_path: String
}
