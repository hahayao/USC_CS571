//
//  ContentView.swift
//  USC Film
//
//  Created by Ha Ha on 4/21/21.
//

import SwiftUI

struct ContentView: View {
    /*@State private var selection = 1
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
            HomePageView()
                .tabItem {
                    Image(systemName: "house")
                    Text("Home")
                }
                .tag(1)
            WatchListView()
                .tabItem {
                    Image(systemName: "heart")
                    Text("WatchList")
                }
                .tag(2)
        }
    }*/
    var body: some View {
        Home()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
