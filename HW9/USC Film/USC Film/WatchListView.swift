//
//  WatchListView.swift
//  USC Film
//
//  Created by Ha Ha on 4/22/21.
//

import SwiftUI

struct WatchListView: View {
    //@State var orderArray:[String] = UserDefaults.standard.object(forKey:"orderArray") as? [String] ?? [String]()
    @StateObject var cache = UserDefaultFunc()
    var body: some View {
        VStack(){
            //if var orderArray:[String] = UserDefaults.standard.object(forKey:"orderArray") as? [String] ?? [String](){
            
            if(cache.orderArray.isEmpty){
                Text("Watchlist is empty")
                    .font(/*@START_MENU_TOKEN@*/.title/*@END_MENU_TOKEN@*/)
                    .foregroundColor(.gray)
            }
            else{
                NavigationView{
                    VStack{
                        let columns = [GridItem(),GridItem(),GridItem()]
                        LazyVGrid(columns: columns, content: {
                            ForEach(cache.orderArray.reversed(), id: \.self){
                                order in
                                //NavigationLink(destination: DetailPageView(detailID: order.index(1, order.endIndex),detailType: order.prefix(1) == "M" ? "MOVIE": "TV")){
                                NavigationLink(destination: DetailPageView(detailID: String(order.dropFirst()) , detailType: order.prefix(1) == "M" ? "MOVIE": "TV", posterPath: UserDefaults.standard.object(forKey:order) as! String)){
                                    WatchListCard(path: UserDefaults.standard.object(forKey:order) as! String)
                                        .onDrag({
                                            cache.currentDraging = order
                                            //print(cache.currentDraging!)
                                            return NSItemProvider(contentsOf: URL(string:"\(order)"))!
                                        })
                                        .onDrop(of: [.url], delegate: DropViewDelegate(selectKey: order, watchListCache: cache))
                                        .contextMenu {
                                            Button {
                                                cache.deleteCard(type: order.prefix(1) == "M" ? "MOVIE": "TV", id: String(order.dropFirst()))
                                            } label: {
                                                Label("Remove from watchList", systemImage: "bookmark.fill")
                                            }
                                        }
                                }.buttonStyle(PlainButtonStyle())
                            }
                        })
                        Spacer()
                    }
                    .padding()
                    //Text("WatchList")
                    
                    .navigationTitle("WatchList")
                    
                }
            }
            
        }
        .onAppear{
            cache.orderArray = UserDefaults.standard.object(forKey:"orderArray") as? [String] ?? [String]()
        }
        
        //}
    }
}

struct WatchListView_Previews: PreviewProvider {
    static var previews: some View {
        WatchListView()
    }
}
