//
//  ReviewInfo.swift
//  USC Film
//
//  Created by Ha Ha on 4/26/21.
//

import Foundation

struct ReviewInfo: Identifiable, Codable{
    var id: String
    var writtenDate: String
    var starRate: String
    var review: String
}
