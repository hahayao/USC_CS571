//
//  DetailPageView.swift
//  USC Film
//
//  Created by Ha Ha on 4/26/21.
//

import SwiftUI
import youtube_ios_player_helper

struct DetailPageView: View {
    let detailID: String
    let detailType: String
    let posterPath: String
    @StateObject var detail = DetailModel()
    @State var btnValue = ""
    @StateObject var cache = UserDefaultFunc()
    
    /* Indicates whether the user want to see all the text or not. */
        @State private var expanded: Bool = false

        /* Indicates whether the text has been truncated in its display. */
        @State private var truncated: Bool = false
    
    @State private var showToast: Bool = false
    
    var body: some View {
        VStack{

            if(self.detail.count == 8){
                //Text(self.detail.temp_name!)
                //Text(self.detail.temp_trailer_path!)
                //NavigationView{
                    ScrollView(content: {
                        VStack(alignment: .leading, spacing:15){
                            YTWrapper(videoID: self.detail.temp_trailer_path!)
                                .frame(height: 200)
                            Text(self.detail.temp_name!)
                                .font(/*@START_MENU_TOKEN@*/.title/*@END_MENU_TOKEN@*/)
                                .bold()
                            Text(self.detail.temp_date_genre_path!)
                                .font(.body)

                            HStack{
                                Image(systemName: "star.fill")
                                    .foregroundColor(.red)
                                Text(self.detail.temp_rating!)
                                    .font(.body)
                            }

                            VStack{
                                Text(self.detail.temp_description!)
                                    .font(.system(size: 16))
                                    .lineLimit(self.expanded ? nil : 3)
                                    .background(GeometryReader { geometry in
                                        Color.clear.onAppear {
                                            self.determineTruncation(geometry)
                                        }
                                    })
                                
                                if self.truncated {
                                    self.toggleButton
                                }
                            }
                            if(self.detail.temp_cast!.isEmpty == false){
                                Text("Cast & Crew")
                                    .font(.system(size: 25))
                                    .fontWeight(.bold)
                                CastCardSlider(castArray: self.detail.temp_cast!)
                            }
                            if(self.detail.temp_review!.isEmpty == false){
                                Text("Reviews")
                                    .font(.system(size: 25))
                                    .fontWeight(.bold)
                                EachReview(info: self.detail.temp_review!, title: self.detail.temp_name!)
                            }
                            
                        }
                        .padding()
                        VStack{
                            if(self.detail.recommend!.isEmpty == false){
                                RecommendSliderView(type: self.detailType, carouselData: self.detail.recommend!)
                            }
                        }
                        
                    })
                    //.navigationBarTitleDisplayMode(.inline)
                    .toast(isPresented: self.$showToast) {
                        HStack(alignment: .center) {
                            if(btnValue == "bookmark"){
                                Text(self.detail.temp_name! + " was removed from Watchlist")
                                    .foregroundColor(.white)
                                    .font(.system(size: 15))
                                    .multilineTextAlignment(.center)
                            }
                            else{
                                Text(self.detail.temp_name! + " was added to Watchlist")
                                    .foregroundColor(.white)
                                    .font(.system(size: 15))
                                    .multilineTextAlignment(.center)
                            }
                            
                        }
                        .frame(width: 230, alignment: /*@START_MENU_TOKEN@*/.center/*@END_MENU_TOKEN@*/)
                    }
                //}
                .toolbar(content: {
                    ToolbarItem(placement: .navigationBarTrailing){
                        HStack{
                            Button{
                                
                                if (UserDefaults.standard.string(forKey: String(detailType.prefix(1)) + detailID) != nil){
                                    print("have")
                                    cache.deleteCard(type: detailType, id: detailID)
                                    btnValue = "bookmark"
                                } else {
                                    print("not have yet")
                                    cache.insertCard(type: detailType, id: detailID, path: posterPath)
                                    btnValue = "bookmark.fill"
                                }
                                if (!self.showToast) {
                                    withAnimation {
                                        self.showToast = true
                                    }
                                }

                            } label:{
                                if(btnValue == ""){
                                    //first time visit this page
                                    if (UserDefaults.standard.string(forKey: String(detailType.prefix(1)) + detailID) != nil){
                                        Image(systemName: "bookmark.fill")
                                            .foregroundColor(.blue)
                                            
                                    }
                                    //first time & not stored yet
                                    else {
                                        Image(systemName: "bookmark")
                                            .foregroundColor(.black)
                                    }
                                }
                                else{
                                    if(btnValue == "bookmark.fill"){
                                        Image(systemName: btnValue)
                                            .foregroundColor(.blue)
                                    }
                                    else{
                                        Image(systemName: btnValue)
                                            .foregroundColor(.black)
                                    }
                                }
                            }
                            Link(destination: URL(string: "https://www.facebook.com/sharer/sharer.php?u=" + "https://www.themoviedb.org/" + detailType.lowercased() + "/" + detailID)!, label: {
                                Image("facebook-app-symbol")
                            })
                            Link(destination: URL(string: "https://twitter.com/intent/tweet?"
                        + "=&text=Check%20out%20this%20link:"
                        + "&url=https://www.themoviedb.org/" + detailType.lowercased() + "/" + detailID
                        + "&hashtags=CSCI571USCFilms")!, label: {
                                Image("twitter")
                            })
                        }
                    }
                })
                
                
                

            }
            else{
                VStack{
                    ProgressView()
                    Text("Fetching Data")
                }
                .onAppear
                {self.detail.fectchDatail(cur_id: detailID, cur_type: detailType)}
            }
        }
            

            //.
        //Text(detailType)
        //if(self.detail.detail == nil){
            //Text("NULL")
        //}
        
    }
    private func encoder(original: String) -> String{
        return original.addingPercentEncoding(withAllowedCharacters: .urlHostAllowed)!
    }
    
    private func determineTruncation(_ geometry: GeometryProxy) {
            // Calculate the bounding box we'd need to render the
            // text given the width from the GeometryReader.
        let total = self.detail.temp_description!.boundingRect(
                with: CGSize(
                    width: geometry.size.width,
                    height: .greatestFiniteMagnitude
                ),
                options: .usesLineFragmentOrigin,
                attributes: [.font: UIFont.systemFont(ofSize: 16)],
                context: nil
            )

            if total.size.height > geometry.size.height {
                self.truncated = true
            }
        }
    var toggleButton: some View {
        HStack{
            Spacer()
            Button(action: { self.expanded.toggle() }) {
                        Text(self.expanded ? "Show less" : "Show more...")
                            .font(.system(size: 14))
                            .foregroundColor(.gray)
                            .fontWeight(.bold)
                            .padding(.top, 6)
                    }
        }
        
        }

}

struct DetailPageView_Previews: PreviewProvider {
    static var previews: some View {
        //DetailPageView(detailID: "123", detailType: "MOVIE")
        ContentView()
        //DetailPageView()
    }
}

struct YTWrapper : UIViewRepresentable {
    var videoID : String
    
    func makeUIView(context: Context) -> YTPlayerView {
        let playerView = YTPlayerView()
        playerView.load(withVideoId: videoID, playerVars: ["playsinline" : 1])
        return playerView
    }
    
    func updateUIView(_ uiView: YTPlayerView, context: Context) {
        uiView.load(withVideoId: videoID, playerVars: ["playsinline" : 1])
    }
}

