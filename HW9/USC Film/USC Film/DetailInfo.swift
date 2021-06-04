//
//  DetailInfo.swift
//  USC Film
//
//  Created by Ha Ha on 4/26/21.
//

import Foundation


struct DetailInfo: Identifiable, Codable{
    var id: String
    var type: String
    var trailer_path: String
    var name: String
    var date_genre: String
    var rating: String
    var description: String
    var cast: [CastInfo]
    var review: [ReviewInfo]
    var shareURL: String
}
