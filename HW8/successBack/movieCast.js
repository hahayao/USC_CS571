const express = require('express');
const router = express.Router();
const axios = require('axios');
const { post } = require('jquery');

router.get('/:id', function(req, res){
    let movieid = req.params.id;
    let apikey = "137fc20b5a905d34f51a102de3246f4d";
    let url = "https://api.themoviedb.org/3/movie/"+movieid+"/credits?api_key=" + apikey + "&language=en-US&page=1";
    axios.get(url).then(posts=>{
        var cleanResult = [];
        for(var i = 0; i < posts.data.cast.length; i++){
            if(posts.data.cast[i].profile_path == null)
            {
                continue;
            }
            tempResult = {
                id: posts.data.cast[i].id,
                name: posts.data.cast[i].name,
                character: posts.data.cast[i].character,
                profile_path: "https://image.tmdb.org/t/p/w500/" + posts.data.cast[i].profile_path
            };
            cleanResult.push(tempResult);
        }
        res.json(cleanResult);
    }).catch(err=>{
        res.send(err);
    })
    });

module.exports = router;