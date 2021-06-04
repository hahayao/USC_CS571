//
//  HomePageCarousel.swift
//  USC Film
//
//  Created by Ha Ha on 4/25/21.
//

import SwiftUI
import Kingfisher

struct HomePageCarousel: View {
    
    let type:String
    let carouselData: [HomePage]
    
    var body: some View {
        VStack(alignment: .leading){
            Text(type)
                .font(.title2)
                .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                .padding(.horizontal)
            GeometryReader { geometry in
                ImageCarouselView(numberOfImages: 5) {
                    if let tempcarouselData = self.carouselData {
                        ForEach(tempcarouselData){obj in
                            NavigationLink(destination: DetailPageView(detailID: obj.id, detailType: obj.type, posterPath: obj.path)){
                                ZStack{
                                    //KFImage(URL(string: obj.path)!)
                                    Image(uiImage: obj.path.load())
                                        .resizable()
                                        .blur(radius: 30, opaque: true)
                                        .scaledToFill()
                                        .frame(width: geometry.size.width, height: geometry.size.height)
                                        .clipped()
                                    
                                    
                                    Image(uiImage: obj.path.load())
                                        .resizable()
                                        .scaledToFill()
                                        .frame(width: geometry.size.width * 0.5, height: geometry.size.height)
                                        .clipped()
                                    
                                    
                                }
                            }
                            .buttonStyle(PlainButtonStyle())
                        }
                    }
                    
                    
                    
                }
            }.frame(height: 300, alignment: .center)
        }
        
        
    }
}

struct HomePageCarousel_Previews: PreviewProvider {
    static var previews: some View {
        //HomePageCarousel()
        ContentView()
    }
}
