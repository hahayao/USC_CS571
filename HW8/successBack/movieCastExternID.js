const express = require('express');
const router = express.Router();
const axios = require('axios');
const { post } = require('jquery');

router.get('/:id', function(req, res){
    let castid = req.params.id;
    let url = "https://api.themoviedb.org/3/person/"+castid+"/external_ids?api_key=97588ddc4a26e3091152aa0c9a40de22&language=en-US&page=1";
    axios.get(url).then(posts=>{
        //console.log(posts.data);
        tempResult = {
            imdb_id: posts.data.imdb_id? ("https://www.imdb.com/name/"+posts.data.imdb_id): "",
            facebook_id: posts.data.facebook_id? ("https://www.facebook.com/"+posts.data.facebook_id): "",
            instagram_id: posts.data.instagram_id? ("https://www.instagram.com/"+posts.data.instagram_id): "",
            twitter_id: posts.data.twitter_id? ("https://twitter.com/"+posts.data.twitter_id): "",
        };
        //console.log(tempResult);
        res.json(tempResult);
    }).catch(err=>{
        res.send(err);
    })
    });

module.exports = router;