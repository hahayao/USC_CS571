//
//  homeCardSlider.swift
//  USC Film
//
//  Created by Ha Ha on 4/26/21.
//

import SwiftUI
import Kingfisher

struct homeCardSlider: View {
    let type:String
    let carouselData: [homeCard]
    @StateObject var cache = UserDefaultFunc()
    @Binding var showToast: Bool
    @Binding var toastMessage: String
    var body: some View {
        VStack(alignment: .leading){
            Text(type)
                .font(.title2)
                .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                .padding(.horizontal)
            ScrollView(.horizontal){
                HStack(alignment: .top, spacing: 15){
                    
                    ForEach(self.carouselData){obj in
                        //KFImage(URL(string: obj.path)!)
                        //Image(uiImage: obj.path.load())
//NavigationLink(destination: Text(item.name))
                        NavigationLink(destination: DetailPageView(detailID: obj.id, detailType: obj.type, posterPath: obj.path)){
                            EachCardImageView(info: obj)
                                .contextMenu {
                                    Button {
                                        if (UserDefaults.standard.string(forKey: String(obj.type.prefix(1)) + obj.id) != nil){
                                            cache.deleteCard(type: obj.type, id: obj.id)
                                            toastMessage = obj.name + " was removed from watchList"
                                        }
                                        else{
                                            cache.insertCard(type: obj.type, id: obj.id, path: obj.path)
                                            toastMessage = obj.name + " was added to watchList"
                                        }
                                        if (!self.showToast) {
                                            withAnimation {
                                                self.showToast = true
                                            }
                                        }
                                    } label: {
                                        if (UserDefaults.standard.string(forKey: String(obj.type.prefix(1)) + obj.id) != nil){
                                            Label("Remove from watchList", systemImage: "bookmark.fill")
                                        }
                                        else{
                                            Label("Add to watchList", systemImage: "bookmark.fill")
                                        }
                                    }
                                    Button{
                                        UIApplication.shared.open(URL(string: "https://www.facebook.com/sharer/sharer.php?u=" + "https://www.themoviedb.org/" + obj.type.lowercased() + "/" + obj.id)!)
                                        print("https://www.facebook.com/sharer/sharer.php?u=" + "https://www.themoviedb.org/" + obj.type.lowercased() + "/" + obj.id)
                                    }label:{
                                        Text("Share on Facebook")
                                        Image("facebook-app-symbol")
                                    }
                                    Button{
                                        UIApplication.shared.open(URL(string: "https://twitter.com/intent/tweet?"
                                            + "=&text=Check%20out%20this%20link:"
                                            + "&url=https://www.themoviedb.org/"
                                            + obj.type.lowercased() + "/" + obj.id
                                            + "&hashtags=CSCI571USCFilms")!)
                                    }label:{
                                        Text("Share on Twitter")
                                        Image("twitter")
                                    }
                                }
                            .frame(width: 120, height: 210)
                                
                        }
                        .buttonStyle(PlainButtonStyle())
            
                    }
                    
                }
                
            }
        }
    }
}

struct homeCardSlider_Previews: PreviewProvider {
    static var previews: some View {
        //homeCardSlider()
        ContentView()
    
    }
}
