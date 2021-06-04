//
//  EachCardImageView.swift
//  USC Film
//
//  Created by Ha Ha on 4/26/21.
//

import SwiftUI

struct EachCardImageView: View {
    let info:homeCard
    //@ObservedObject var imageLoader = ImageLoader()
    @StateObject var cache = UserDefaultFunc()
    
    
    var body: some View {
        VStack(alignment: .leading){
            //if self.imageLoader.image != nil {
                
                //Image(uiImage: self.imageLoader.image!)
                Image(uiImage: info.path.load())
                    .resizable()
                    .aspectRatio(2/3,contentMode: /*@START_MENU_TOKEN@*/.fill/*@END_MENU_TOKEN@*/)
                    .frame(width: 100, height: 150)
                    .cornerRadius(8)
                
                VStack(alignment: .center, spacing: 0){
                    Text(info.name)
                        .font(.caption)
                        .fontWeight(.bold)
                        .multilineTextAlignment(.center)
                    
                    Text(info.date)
                        .font(.caption)
                        .foregroundColor(Color.gray)
                    
                    Spacer()
                }
                .frame(width: 100, height: 60)
                //.frame(width: 100)
                
            //}
            
        }
        .frame(width: 100, height: 210)
        .background(Color.white)
        .cornerRadius(8)
        /*.contextMenu {
            Button {
                
            } label: {
                Label("Remove from watchList", systemImage: "bookmark.fill")
            }
        }*/
        //.padding(.horizontal)
        /*.onAppear{
            self.imageLoader.loadImage(with: URL(string:self.info.path)!)
        }*/
        
        
    }
}

struct EachCardImageView_Previews: PreviewProvider {
    static var previews: some View {
         EachCardImageView(info: homeCard(id: "19404",
         name: "Dilwale Dulhania Le Jayenge",
         type: "MOVIE",
         path: "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/person-placeholder.png",
         date: "(1995)",
         url: "https://www.themoviedb.org/movie/19404"))
        //ContentView()
        
    }
}
