const express = require('express');
const router = express.Router();
const axios = require('axios');
const { post } = require('jquery');

router.get('/:id', function(req, res){
    let movieid = req.params.id;
    let apikey = "137fc20b5a905d34f51a102de3246f4d";
    let url = "https://api.themoviedb.org/3/tv/"+movieid+"?api_key=" + apikey + "&language=en-US&page=1";
    //let url ="https://api.themoviedb.org/3/movie/399566?api_key=97588ddc4a26e3091152aa0c9a40de22&language=en-US&page=1";
    axios.get(url).then(posts=>{
        //console.log("test here");
        //4.1.9
        //console.log(posts);
        tempgenres = "";
        templanguage = "Spoken Languages:";
        for(var i = 0; i < posts.data.genres.length; i++){
        tempgenres +=posts.data.genres[i].name;
        tempgenres +=","
        }
        for(var i = 0; i < posts.data.spoken_languages.length; i++){
        templanguage +=posts.data.spoken_languages[i].english_name;
        templanguage +=","
        }
        tempRumtime = "";
        if(posts.data.episode_run_time != null){
            tempRumtime = posts.data.episode_run_time[0];
        }
        temppost = (posts.data.poster_path?posts.data.poster_path:"");
        var temp_vote = 0;
        if(posts.data.vote_average != null){
            temp_vote = posts.data.vote_average / 2.0
        }

    finalResults = {
        //youtubePath: resultKey,
        title: (posts.data.name? posts.data.name: ""),
        genres: (posts.data.genres[0].name?tempgenres.slice(0, -1):""),
        spoken_languages: (posts.data.spoken_languages[0].english_name?templanguage.slice(0, -1):"Spoken Languages:"),
        release_date: (posts.data.first_air_date ? posts.data.first_air_date.slice(0, 4):""),
        runtime: tempRumtime,
        overview: (posts.data.overview?posts.data.overview:""),
        vote_average: temp_vote.toFixed(1),
        tagline: (posts.data.tagline?posts.data.tagline:""),
        poster_path: "https://image.tmdb.org/t/p/w500" + temppost
    }
    //console.log("ok");
    //console.log(finalResults);
    //console.log(posts.data);
    res.json(finalResults);
}).catch(err=>{
    res.send(err);
})
});

module.exports = router;
