const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:keyworld', function(req, res){
    let keyworld = req.params.keyworld;
    let url = "https://api.themoviedb.org/3/search/multi?api_key=97588ddc4a26e3091152aa0c9a40de22&lang%20uage=en-US&query=" + keyworld;
    axios.get(url).then(navSearch=>{
        console.log(navSearch.data);
        //only need 7
        var FilteredResults = [];
        var countAvailableResults = 0;
        for(var i = 0; i < navSearch.data.results.length; i++){
            if(navSearch.data.results[i].media_type == "movie"){
                var path = navSearch.data.results[i].backdrop_path;
                console.log(path);
                if(path == null){
                    continue;
                }
                var watchlistPath = navSearch.data.results[i].poster_path;
                if(watchlistPath == null){
                    continue;
                }
				var vote_credit = 0;
				if(navSearch.data.results[i].vote_average != null){
					vote_credit = parseFloat(navSearch.data.results[i].vote_average) / 2.0;
				}
				var temp_date = "";
				if(navSearch.data.results[i].release_date != null){
					temp_date = "(" + navSearch.data.results[i].release_date.slice(0, 4) + ")";
				}
                var temp = {id: navSearch.data.results[i].id,
                            name: navSearch.data.results[i].title,
                            path: "https://image.tmdb.org/t/p/w500" + navSearch.data.results[i].backdrop_path,
                            type: "MOVIE",
                            date: temp_date,
							vote_average: parseFloat(vote_credit).toFixed(1),
                            watchlist_path: "https://image.tmdb.org/t/p/w500"+ watchlistPath
                            }
                FilteredResults.push(temp);
                countAvailableResults++;
            }
            else if(navSearch.data.results[i].media_type == "tv"){
                var path = navSearch.data.results[i].backdrop_path;
                if(path == null){
                    continue;
                }
                var watchlistPath = navSearch.data.results[i].poster_path;
                if(watchlistPath == null){
                    continue;
                }
				var vote_credit = 0;
				if(navSearch.data.results[i].vote_average != null){
					vote_credit = parseFloat(navSearch.data.results[i].vote_average) / 2.0;
				}
				var temp_date = "";
				if(navSearch.data.results[i].first_air_date != null){
					temp_date = "(" + navSearch.data.results[i].first_air_date.slice(0, 4) + ")";
				}
                var temp = {id: navSearch.data.results[i].id,
                            name: navSearch.data.results[i].name,
                            path: "https://image.tmdb.org/t/p/w500" + navSearch.data.results[i].backdrop_path,
                            type: "TV",
                            date: temp_date,
							vote_average: parseFloat(vote_credit).toFixed(1),
                            watchlist_path: "https://image.tmdb.org/t/p/w500"+ watchlistPath
                            }
                FilteredResults.push(temp);
                countAvailableResults++;
            }
            else{
                continue;
            }
        }
        if(countAvailableResults == 0){
            FilteredResults = null;
        }
        console.log(FilteredResults);
        res.json(FilteredResults);

    }).catch(err=>{
        res.send(err);
    })
});


module.exports = router;