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
        for(var i = 0; i < navSearch.data.results.length, countAvailableResults < 7; i++){
            if(navSearch.data.results[i].media_type == "movie"){
                console.log("m");
                var path = navSearch.data.results[i].backdrop_path;
                console.log(path);
                if(path == null){
                    continue;
                }
                var temp = {id: navSearch.data.results[i].id,
                            name: navSearch.data.results[i].title,
                            path: "https://image.tmdb.org/t/p/w500" + navSearch.data.results[i].backdrop_path,
                            type: "movie"
                            }
                FilteredResults.push(temp);
                countAvailableResults++;
            }
            else if(navSearch.data.results[i].media_type == "tv"){
                console.log("t");
                var path = navSearch.data.results[i].backdrop_path;
                if(path == null){
                    continue;
                }
                var temp = {id: navSearch.data.results[i].id,
                            name: navSearch.data.results[i].name,
                            path: "https://image.tmdb.org/t/p/w500" + navSearch.data.results[i].backdrop_path,
                            type: "tv"
                            }
                FilteredResults.push(temp);
                countAvailableResults++;
            }
            else{
                continue;
            }
        }
        if(countAvailableResults == 0){
            FilteredResults = [{id: "", name: "", path: "", type: ""}];
        }
        console.log("HREE")
        console.log(FilteredResults);
        res.json(FilteredResults);

    }).catch(err=>{
        res.send(err);
    })
});


module.exports = router;