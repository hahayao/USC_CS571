const express = require('express');
const router = express.Router();
const axios = require('axios');
const { post } = require('jquery');

router.get('/:id', function(req, res){
    let movieid = req.params.id;
    let apikey = "137fc20b5a905d34f51a102de3246f4d";
    let url = "https://api.themoviedb.org/3/tv/"+movieid+"/recommendations?api_key=" + apikey + "&language=en-US&page=1";
    axios.get(url).then(posts=>{
        var cleanResult = [];
        for(var i = 0; i < posts.data.results.length; i++){
            if(posts.data.results[i].poster_path == null)
            {
                continue;
            }
            tempResult = {
                id: posts.data.results[i].id,
                title: posts.data.results[i].name,
                path: "https://image.tmdb.org/t/p/w500" + posts.data.results[i].poster_path,
                date: "(" + posts.data.results[i].first_air_date.slice(0, 4) + ")",
                url: "https://www.themoviedb.org/tv/" + String(posts.data.results[i].id),
                type: "TV"
            };
            cleanResult.push(tempResult);
        }
        if(cleanResult.length == 0){
            cleanResult = null;
        }
        res.json(cleanResult);
    }).catch(err=>{
        res.send(err);
    })
    });

module.exports = router;