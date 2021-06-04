const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/', function(req, res){
    let apikey = "137fc20b5a905d34f51a102de3246f4d";
    let url = "https://api.themoviedb.org/3/tv/airing_today?api_key=" + apikey + "&language=en-US&page=1";
    axios.get(url).then(posts=>{
        //console.log(posts.data);
        var FilteredResults = [];
        var countAvailableResults = 0;
        for(var i = 0; i < posts.data.results.length, countAvailableResults < 5; i++){
            if(posts.data.results[i].poster_path == null)
            {
                continue;
            }
            var temp = {id: posts.data.results[i].id,
                path: "https://image.tmdb.org/t/p/original" + posts.data.results[i].poster_path,
	        type: "TV"
                };
            FilteredResults.push(temp);
            countAvailableResults++;
        }
        //console.log(FilteredResults);
        res.json(FilteredResults);
    }).catch(err=>{
        res.send(err);
    })
});


module.exports = router;

