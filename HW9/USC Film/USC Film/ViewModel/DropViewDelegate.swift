//
//  DropViewDelegate.swift
//  USC Film
//
//  Created by Ha Ha on 4/28/21.
//

import SwiftUI

struct DropViewDelegate: DropDelegate {
    var selectKey: String
    var watchListCache: UserDefaultFunc
    func performDrop(info: DropInfo) -> Bool {
        return true
    }
    func dropEntered(info: DropInfo) {
        //print(selectKey)
        //var cache = UserDefaultFunc()
        //print(selectKey)
        //print(watchListCache.currentDraging)
        /*if(selectKey == watchListCache.currentDraging){
            print("Same place")
        }
        else{
            print("refresh")
        }*/
        var orderArray = UserDefaults.standard.object(forKey:"orderArray") as? [String] ?? [String]()
        print(orderArray)
        if(selectKey != watchListCache.currentDraging){
            //drop point
            var iter1 = 0
            for str in orderArray{
                if str == selectKey{
                    break
                }
                else{
                    iter1 = iter1 + 1
                }
            }
            //drag
            var iter2 = 0
            for str in orderArray{
                if str == watchListCache.currentDraging{
                    break
                }
                else{
                    iter2 = iter2 + 1
                }
            }
            //print(iter1)
            //print(iter2)
            var temp = orderArray[iter1]
            orderArray[iter1] = orderArray[iter2]
            orderArray[iter2] = temp
            print(orderArray)
            withAnimation(.default){
                UserDefaults.standard.set(orderArray, forKey: "orderArray")
                watchListCache.orderArray = orderArray
            }
            print(orderArray)
        }
        
        //var temp = orderArray[iter1]
        //orderArray[iter1] = orderArray[iter2]
        //orderArray[iter2] = temp
        //UserDefaults.standard.setValue(orderArray, forUndefinedKey: "orderArray")
        /*if (selectKey == watchListCache.currentDraging){
            print("change")
            
        }
        else{
            print("same")
        }*/
    }
}

