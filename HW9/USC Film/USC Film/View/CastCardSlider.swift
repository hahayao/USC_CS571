//
//  CastCardSlider.swift
//  USC Film
//
//  Created by Ha Ha on 4/27/21.
//

import SwiftUI

struct CastCardSlider: View {
    let castArray: [CastInfo]
    var body: some View {
        ScrollView(.horizontal, showsIndicators: false){
            HStack(alignment: .top, spacing: 15){
                ForEach(self.castArray){obj in
                    EachCastImage(info: obj)
                        .frame(width: 90)
                }
            }
        }
    }
}

struct CastCardSlider_Previews: PreviewProvider {
    static var previews: some View {
        //CastCardSlider()
        ContentView()
    }
}
