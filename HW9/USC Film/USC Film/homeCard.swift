//
//  homeCard.swift
//  USC Film
//
//  Created by Ha Ha on 4/26/21.
//

import Foundation

struct homeCard: Identifiable, Codable{
    var id: String
    var name: String
    var type: String
    var path: String
    var date: String
    var url: String
}
