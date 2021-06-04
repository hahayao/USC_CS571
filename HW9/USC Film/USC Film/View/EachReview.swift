//
//  EachReview.swift
//  USC Film
//
//  Created by Ha Ha on 4/27/21.
//

import SwiftUI

struct EachReview: View {
    let info: [ReviewInfo]
    let title: String
    var body: some View {
        
        VStack(alignment: .leading, spacing: 10){
            ForEach(info){ obj in
                NavigationLink(destination: ExpandReviewView(title: self.title, info: obj)){
                    VStack(alignment: .leading){
                        HStack{
                            Text("A review by " + obj.id)
                                .fontWeight(.bold)
                                .font(.system(size: 18))
                            Spacer()
                        }
                        
                        
                        Text("Written by " + obj.id + " " + obj.writtenDate)
                            .font(.system(size: 16))
                            .foregroundColor(.gray)
                        HStack{
                            Image(systemName: "star.fill")
                                .foregroundColor(.red)
                            Text(obj.starRate + "/5.0")
                                .font(.system(size: 18))
                        }
                        .padding(.vertical, 2)
                        
                        Text(obj.review)
                            .font(.system(size: 16))
                            .lineLimit(3)
                    }
                    .frame(width: 330)
                    .padding(10)
                    .overlay(
                        RoundedRectangle(cornerRadius: 10)
                            .stroke(Color.gray, lineWidth: 1)
                    )
                    
                }
                .buttonStyle(PlainButtonStyle())
            }
        }
    }
}

struct EachReview_Previews: PreviewProvider {
    static var previews: some View {
        //EachReview()
        ContentView()
    }
}
