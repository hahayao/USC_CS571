//
//  ExpandReviewView.swift
//  USC Film
//
//  Created by Ha Ha on 4/27/21.
//

import SwiftUI

struct ExpandReviewView: View {
    let title: String
    let info:ReviewInfo
    var body: some View {
        ScrollView{
            VStack(alignment: .leading, spacing: 8){
                Text(title)
                    .font(.system(size: 28))
                    .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                Text("By " + info.id + " on " + info.writtenDate)
                    .font(.system(size: 16))
                    .foregroundColor(.gray)
                HStack{
                    Image(systemName: "star.fill")
                        .foregroundColor(.red)
                    Text(info.starRate + "/5.0")
                        .font(.system(size: 18))
                }
                Divider()
                Text(info.review)
                    .font(.system(size: 18))
            }
            .padding()
        }
        
        
    }
}

struct ExpandReviewView_Previews: PreviewProvider {
    static var previews: some View {
        //ExpandReviewView()
        ContentView()
    }
}
