//
//  EachCastImage.swift
//  USC Film
//
//  Created by Ha Ha on 4/27/21.
//

import SwiftUI

struct EachCastImage: View {
    let info:CastInfo
    @ObservedObject var imageLoader = ImageLoader()
    var body: some View {
        VStack(alignment: .leading){
            if self.imageLoader.image != nil {
                Image(uiImage: self.imageLoader.image!)
                    .resizable()
                    .aspectRatio(2/3,contentMode: /*@START_MENU_TOKEN@*/.fill/*@END_MENU_TOKEN@*/)
                    .cornerRadius(8)
                    .clipShape(Circle())
                    .frame(width: 90, height: 90)
                    
            }
            //VStack(alignment: .center, spacing: 0){
                Text(info.id)
                    .font(.caption)
                    .frame(width: 90, alignment: .center)
            //}
        }
        .padding(.horizontal)
        .onAppear{
            self.imageLoader.loadImage(with: URL(string:self.info.castImagePath)!)
        }
    }
}

struct EachCastImage_Previews: PreviewProvider {
    static var previews: some View {
        //EachCastImage()
        ContentView()
    }
}
