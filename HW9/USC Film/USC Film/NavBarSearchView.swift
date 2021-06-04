//
//  NavBarSearchView.swift
//  USC Film
//
//  Created by Ha Ha on 4/23/21.
//

/*import SwiftUI
import Foundation
import Alamofire
import SwiftyJSON

struct NavBarSearchView: View {
    
    @ObservedObject var retrieveData = getNavData()
    @State var searchText : String = ""
    var body: some View {
        VStack {
            HStack{
                Text("Search")
                    .font(.largeTitle)
                    .fontWeight(.bold)
                Spacer()
            }
            .padding()
            //SearchBar(text: $searchText)
            if (self.searchText.count >= 3){
                if(self.retrieveData.navSearchready){
                    ScrollView(.vertical){
                        VStack{
                            ForEach(retrieveData.navSearchdata){ obj in
                                searchCard(id: obj.id, type: obj.type, name: obj.name, path: obj.path, vote_average: obj.vote_average)
                                
                            }
                        }
                    }
                }
                
                
            }
            else{
                Spacer()
            }
            
            /*List(retrieveData.navSearchdata) { obj in
                searchCard(id: obj.id, type: obj.type, name: obj.name, path: obj.path, vote_average: obj.vote_average)
                
            }
            .listStyle(SidebarListStyle())*/
        }
    }
}

struct NavBarSearchView_Previews: PreviewProvider {
    static var previews: some View {
        NavBarSearchView()
    }
}

class  getNavData: ObservableObject{
    @Published var navSearchdata = [navDataType]()
    @Published var navSearchready:Bool = true
    init(){
        let thisurl:String = "http://localhost:8080/apis/navSearch/how"
        AF.request(thisurl, encoding:JSONEncoding.default).responseJSON { response in
            switch response.result
            {
            case .success(let value):
                let jsondata = JSON(value)
                print(jsondata[0]["id"])
                if(jsondata[0]["id"] == ""){
                    //no result
                    
                }
                else{
                    jsondata.forEach{eachjson in
                        self.navSearchdata.append(
                            navDataType(id: eachjson.1["id"].stringValue,
                                        type: eachjson.1["type"].stringValue,
                                        name: eachjson.1["name"].stringValue,
                                        path: eachjson.1["path"].stringValue,
                                        vote_average: eachjson.1["vote_average"].stringValue)
                        )
                    }
                }
                
                break
            case .failure(let error):
                print("ERROR")
                print(error)
                break
            // do something with the error
            }
        }
    }
}

struct navDataType : Identifiable{
    var id: String
    var type: String
    var name: String
    var path: String
    var vote_average: String
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

struct searchCard: View{
    var id = ""
    var type = ""
    var name = ""
    var path = ""
    var vote_average = ""
    var body : some View{
        ZStack{
            Image(uiImage: path.load())
                .resizable()
                .frame(height: 200)
                .cornerRadius(10.0)
            VStack{
                HStack{
                    Text(type)
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
}*/
