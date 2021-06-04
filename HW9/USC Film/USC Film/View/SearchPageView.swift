//
//  SearchPageView.swift
//  USC Film
//
//  Created by Ha Ha on 4/22/21.
//

import SwiftUI

struct SearchPageView: View {
    @EnvironmentObject var homeData: HomeViewModel
    @State private var isEidting = false
    var body: some View {
        //NavBarSearchView()
        NavigationView{
            VStack(spacing:15){
                HStack{
                    SearchBar(text: $homeData.searchQuery,  placeholder: "Search Movies, TVs...")
                        .autocapitalization(/*@START_MENU_TOKEN@*/.none/*@END_MENU_TOKEN@*/)
                        .disableAutocorrection(true)
                        .onTapGesture {
                            self.isEidting = true
                        }
                    if self.isEidting{
                        Button(action: {
                            self.isEidting = false;
                            homeData.searchQuery = ""
                        }, label: {
                            Text("Cancel")
                                .font(.system(size: 15))
                                //.padding(.trailing, 1)
                                .padding(.trailing, 10)
                                .transition(.move(edge: .trailing))
                                .animation(.default)
                            
                        })
                    }
                    
                }
                if(homeData.searchQuery == ""){
                    Spacer()
                }
            //}
            ScrollView(.vertical, showsIndicators: false, content:{
                
                if let searchresult = homeData.fetchedSearchResult{
                    if searchresult.isEmpty{
                        Text("No Result Found")
                            .padding()
                    }
                    else{
                        //display result
                        ForEach(searchresult){ obj in
                            NavigationLink(destination: DetailPageView(detailID: obj.id, detailType: obj.type, posterPath: obj.watchlist_path)){
                                navsearchCard(id: obj.id, type: obj.type, name: obj.name, path: obj.path, vote_average: obj.vote_average, date: obj.date)
                            }
                            
                        }
                    }
                }
                else{
                    if (homeData.searchQuery.count >= 3){
                        ProgressView()
                            .padding()
                    }
                }
            })
            }
            .navigationTitle("Search")
        }
    }
}

struct navsearchCard: View{
    var id = ""
    var type = ""
    var name = ""
    var path = ""
    var vote_average = ""
    var date = ""
    var body : some View{
        ZStack{
            Image(uiImage: path.load())
                .resizable()
                .frame(height: 200)
                .cornerRadius(10.0)
            VStack{
                HStack{
                    Text(type + date)
                        .foregroundColor(.white)
                        .font(.title2)
                        .fontWeight(.bold)
                        .padding(10)
                    Spacer()
                    HStack{
                        Image(systemName: "star.fill")
                            .foregroundColor(.red)
                        Text(vote_average)
                            .foregroundColor(.white)
                            .font(.title2)
                            .fontWeight(.bold)
                    }
                    .padding(10)
                }
                
                Spacer()
                HStack{
                    Text(name)
                        .foregroundColor(.white)
                        .font(.title2)
                        .fontWeight(.bold)
                        .padding(10)
                    Spacer()
                }
            }
            
        }
        .padding(.horizontal, 15)
        .padding(.vertical, 5)
    }
}

struct SearchPageView_Previews: PreviewProvider {
    static var previews: some View {
        //SearchPageView()
        ContentView()
    }
}

struct SearchBar: UIViewRepresentable {

    @Binding var text: String
    var placeholder: String

    class Coordinator: NSObject, UISearchBarDelegate {

        @Binding var text: String

        init(text: Binding<String>) {
            _text = text
        }

        func searchBar(_ searchBar: UISearchBar, textDidChange searchText: String) {
            text = searchText
        }
    }

    func makeCoordinator() -> SearchBar.Coordinator {
        return Coordinator(text: $text)
    }

    func makeUIView(context: UIViewRepresentableContext<SearchBar>) -> UISearchBar {
        let searchBar = UISearchBar(frame: .zero)
        searchBar.delegate = context.coordinator
        searchBar.placeholder = placeholder
        searchBar.searchBarStyle = .minimal
        return searchBar
    }

    func updateUIView(_ uiView: UISearchBar, context: UIViewRepresentableContext<SearchBar>) {
        uiView.text = text
    }
    
    /*func searchBarTextDidBeginEditing(_ searchBar: UISearchBar) {

       searchBar.setShowsCancelButton(true, animated: true)

    }
    
    func searchBarTextDidEndEditing(_ searchBar: UISearchBar) {

        searchBar.setShowsCancelButton(false, animated: true)
    }*/
}

extension String{
    func load() -> UIImage{
        do{
            //convert string to URL
            guard let url = URL(string: self)
            else{//return empty image if the url is invalid
                return UIImage()
            }
            //convert url to data
            let data: Data = try Data(contentsOf: url)
            return UIImage(data: data) ?? UIImage()
            
        }catch{
            
        }
        return UIImage()
    }
}
