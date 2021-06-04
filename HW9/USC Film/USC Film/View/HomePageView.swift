//
//  HomePageView.swift
//  USC Film
//
//  Created by Ha Ha on 4/22/21.
//

import SwiftUI
import Kingfisher

struct HomePageView: View {
    @State var toolbtnContent:String = "TV shows"
    @EnvironmentObject var homeData: HomeViewModel
    @State private var toastMessage: String = ""
    @State private var showToast: Bool = false
    var body: some View {
        if ((homeData.fetchedNowPlayingMovieResult != nil) && (homeData.fetchedTrendingTVResult != nil) &&
                (homeData.fetchedtopMovie != nil) &&
                (homeData.fetchedPopMovie != nil) &&
                (homeData.fetchedtopTV != nil) &&
                (homeData.fetchedPopTV != nil)){
            NavigationView{
                ScrollView{
                    VStack{
                        //MOVIE
                        if(toolbtnContent == "TV shows"){
                            HomePageCarousel(type: "Now Playing", carouselData: homeData.fetchedNowPlayingMovieResult!)
                            homeCardSlider(type: "Top Rated", carouselData: homeData.fetchedtopMovie!, showToast: $showToast, toastMessage: $toastMessage)
                            homeCardSlider(type: "Popular", carouselData: homeData.fetchedPopMovie!, showToast: $showToast, toastMessage: $toastMessage)
                        }
                        //TV SHOWS
                        else{
                            HomePageCarousel(type: "Trending", carouselData: homeData.fetchedTrendingTVResult!)
                            homeCardSlider(type: "Top Rated", carouselData: homeData.fetchedtopTV!, showToast: $showToast, toastMessage: $toastMessage)
                            homeCardSlider(type: "Popular", carouselData: homeData.fetchedPopTV!, showToast: $showToast, toastMessage: $toastMessage)
                        }
                        
                    }
                    //FOOTER
                    Link(destination: URL(string: "https://www.themoviedb.org/")!,
                    label: {
                        VStack(alignment: .center){
                            Text("Powered by TMDB")
                            Text("Developed by Yaoyuan Cui")
                        }
                        .multilineTextAlignment(.center)
                        .foregroundColor(.gray)
                        .font(.footnote)
                        
                    })
                }
                .toast(isPresented: self.$showToast) {
                    HStack(alignment: .center) {
                       Text(toastMessage)
                        .foregroundColor(.white)
                        .font(.system(size: 15))
                        .multilineTextAlignment(.center)
                    }
                    .frame(width: 230, alignment: /*@START_MENU_TOKEN@*/.center/*@END_MENU_TOKEN@*/)
                }
                .navigationTitle("USC Films")
                .toolbar(content: {
                    ToolbarItem(placement: .navigationBarTrailing){
                        Button(self.toolbtnContent){
                            if(self.toolbtnContent == "TV shows"){
                                self.toolbtnContent = "Movies"
                            }
                            else{
                                self.toolbtnContent = "TV shows"
                            }
                        }
                    }
                })
            }
        }
        else{
            VStack(alignment: .center){
                Spacer()
                ProgressView()
                Text("Fetching Data...")
                    .foregroundColor(Color.gray)
                Spacer()
            }
        }
    }
    
    struct HomePageView_Previews: PreviewProvider {
        static var previews: some View {
            ContentView()
        }
    }
}

