//
//  Home.swift
//  USC Film
//
//  Created by Ha Ha on 4/24/21.
//

import SwiftUI

struct Home: View {
    @State private var selection = 1
    @StateObject var homeData = HomeViewModel()
    init(){
        UITabBar.appearance().barTintColor = .systemBackground
    }
    var body: some View {
        TabView(selection:$selection){
            SearchPageView()
                .tabItem {
                    Image(systemName: "magnifyingglass")
                    Text("Search")
                }
                .tag(0)
                .environmentObject(homeData)
            HomePageView()
                .tabItem {
                    Image(systemName: "house")
                    Text("Home")
                }
                .tag(1)
                .environmentObject(homeData)
            WatchListView()
                .tabItem {
                    Image(systemName: "heart")
                    Text("WatchList")
                }
                .tag(2)
        }
    }
}

struct Home_Previews: PreviewProvider {
    static var previews: some View {
        Home()
    }
}
