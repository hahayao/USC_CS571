//
//  RecommendSliderView.swift
//  USC Film
//
//  Created by Ha Ha on 4/27/21.
//

import SwiftUI

struct RecommendSliderView: View {
    let type:String
    let carouselData: [homeCard]
    var body: some View {
        VStack(alignment: .leading){
            if(type == "MOVIE"){
                Text("Recommended Movies")
                    .font(.title2)
                    .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                    .padding(.horizontal)
            }
            else{
                Text("Recommended TVs")
                    .font(.title2)
                    .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                    .padding(.horizontal)
            }
            
            ScrollView(.horizontal, showsIndicators: false){
                HStack(alignment: .top, spacing: 15){
                    
                    ForEach(self.carouselData){obj in
                        //KFImage(URL(string: obj.path)!)
                        //Image(uiImage: obj.path.load())
//NavigationLink(destination: Text(item.name))
                        EachRecommendCard(info: obj)
                            .frame(width: 120)
                        
                            
                    }
                }
            }
        }
    }
}

struct RecommendSliderView_Previews: PreviewProvider {
    static var previews: some View {
        //RecommendSliderView()
        ContentView()
    }
}
