//
//  WatchListCard.swift
//  USC Film
//
//  Created by Ha Ha on 4/28/21.
//

import SwiftUI

struct WatchListCard: View {
    let path: String
    //@ObservedObject var imageLoader = ImageLoader()
    var body: some View {
        //Text(UserDefaults.standard.object(forKey:self.imageName) as! String)
        //VStack{
            //if self.imageLoader.image != nil{
                Image(uiImage: path.load())
                //Image(uiImage: self.imageLoader.image!)
                    .resizable()
                    .aspectRatio(2/3,contentMode: /*@START_MENU_TOKEN@*/.fill/*@END_MENU_TOKEN@*/)
                    //.cornerRadius(8)
                    //.frame(width: 100, height: 150)
                
            //}
        //}
        /*.onAppear{
            let temp:String = UserDefaults.standard.object(forKey:self.imageName) as! String
            self.imageLoader.loadImage(
                with: URL(string:temp)!)*/
        }
    }

struct WatchListCard_Previews: PreviewProvider {
    static var previews: some View {
        //WatchListCard()
        ContentView()
    }
}
