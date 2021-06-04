const express = require('express');
const router = express.Router();
const axios = require('axios');
const { post } = require('jquery');
const e = require('express');

router.get('/:id', function(req, res){
    let movieid = req.params.id;
    let apikey = "137fc20b5a905d34f51a102de3246f4d";
    let url = "https://api.themoviedb.org/3/tv/"+movieid+"/credits?api_key=" + apikey + "&language=en-US&page=1";
    axios.get(url).then(posts=>{
        var cleanResult = [];
        for(var i = 0; i < posts.data.cast.length; i++){
            if(i == 10){
                break;
            }
            var tempProfile; 
            if(posts.data.cast[i].profile_path == null)
            {
                tempProfile = "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/person-placeholder.png";
            }
            else{
                tempProfile = "https://image.tmdb.org/t/p/w500/" + posts.data.cast[i].profile_path;
            }
            tempResult = {
                id: posts.data.cast[i].id,
                name: posts.data.cast[i].name,
                character: posts.data.cast[i].character,
                profile_path: tempProfile
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