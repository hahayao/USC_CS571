//
//  EachRecommendCard.swift
//  USC Film
//
//  Created by Ha Ha on 4/27/21.
//

import SwiftUI

struct EachRecommendCard: View {
    let info:homeCard
    @ObservedObject var imageLoader = ImageLoader()
    var body: some View {
        VStack(alignment: .leading){
            if self.imageLoader.image != nil {
                NavigationLink(
                    destination: DetailPageView(detailID: info.id, detailType: info.type, posterPath: info.path)){
                    Image(uiImage: self.imageLoader.image!)
                        .resizable()
                        .aspectRatio(2/3,contentMode: /*@START_MENU_TOKEN@*/.fill/*@END_MENU_TOKEN@*/)
                        .cornerRadius(8)
                        .frame(width: 100, height: 150)
                        .toolbar {

                            // ... other toolbar items

                            ToolbarItem(placement: .navigationBarLeading) {
                                Text("")
                            }
                        }
                }
            }
        }
        .padding(.horizontal)
        .onAppear{
            self.imageLoader.loadImage(with: URL(string:self.info.path)!)
        }
    }
}

struct EachRecommendCard_Previews: PreviewProvider {
    static var previews: some View {
        //EachRecommendCard()
        ContentView()
    }
}
