const express = require('express');
const router = express.Router();
const axios = require('axios');
const { post } = require('jquery');

router.get('/:id', function(req, res){
    let movieid = req.params.id;
    let apikey = "137fc20b5a905d34f51a102de3246f4d";
    let url = "https://api.themoviedb.org/3/tv/"+movieid+"/videos?api_key=" + apikey + "&language=en-US&page=1";
    axios.get(url).then(posts=>{
        //console.log(posts.data);
        var FilteredResults = [];
        var checkhasTrailer = -1;
        var resultKey;
        for(var i = 0; i < posts.data.results.length; i++){
            if(posts.data.results[i].site != "YouTube" 
            || posts.data.results[i].name == null 
            || posts.data.results[i].type == null
            ||posts.data.results[i].key == null)
            {
                continue;
            }
            if(posts.data.results[i].type != "Trailer" && posts.data.results[i].type != "Teaser"){
                continue;
            }
            if(posts.data.results[i].type == "Trailer"){
                checkhasTrailer = 1;
            }
            var temp = 
                {name: posts.data.results[i].name,
                    type: posts.data.results[i].type,
                    key: posts.data.results[i].key
                };
            FilteredResults.push(temp);
        }
        if(FilteredResults.length == 0){
            resultKey = "tzkWB85ULJY";
        }
        else{
            if(checkhasTrailer == 1){
                for(var i = 0; i < FilteredResults.length; i++){
                    if(FilteredResults[i].type == "Trailer"){
                        resultKey = FilteredResults[i].key;
                    }
                }
            }
            else{
                resultKey = FilteredResults[0].key;
            }
        }
        //console.log(resultKey);
        res.json(resultKey);
    }).catch(err=>{
        res.send(err);
    })
});



module.exports = router;