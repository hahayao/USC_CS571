//
//  UserDefaultFunc.swift
//  USC Film
//
//  Created by Ha Ha on 4/27/21.
//

import Foundation
import UIKit

class UserDefaultFunc: ObservableObject{
    @Published var currentDraging: String?
    @Published var orderArray:[String] = UserDefaults.standard.object(forKey:"orderArray") as? [String] ?? [String]()
    init(){
        //UserDefaults.standard.set([], forKey: "orderArray")
        UserDefaults.resetStandardUserDefaults()
    }
    func insertCard(type: String, id: String, path: String){
        //print(UserDefaults.standard.dictionaryRepresentation())
        let tempKey = String(type.prefix(1)) + id

            var orderArray = UserDefaults.standard.object(forKey:"orderArray") as? [String] ?? [String]()
        print(orderArray)
            orderArray.append(tempKey)
            print(orderArray)
            UserDefaults.standard.set(orderArray, forKey: "orderArray")
        UserDefaults.standard.set(path, forKey: tempKey)
        self.orderArray = orderArray
        //print(UserDefaults.standard.dictionaryRepresentation())
    }
    func deleteCard(type: String, id: String){
        //delete key & orderArray
        let tempKey = String(type.prefix(1)) + id
        UserDefaults.standard.removeObject(forKey: tempKey)
        var orderArray = UserDefaults.standard.object(forKey:"orderArray") as? [String] ?? [String]()
        var iter = 0
        print("deleting")
        for str in orderArray{
            if str == tempKey{
                orderArray.remove(at: iter)
                break
            }
            else{
                iter = iter + 1
            }
        }
        UserDefaults.standard.set(orderArray, forKey: "orderArray")
        self.orderArray = orderArray
    }
}
