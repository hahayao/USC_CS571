const express = require('express');
const router = express.Router();
const axios = require('axios');
const { post } = require('jquery');
const e = require('express');

router.get('/:id', function(req, res){
    let movieid = req.params.id;
    let apikey = "137fc20b5a905d34f51a102de3246f4d";
    let url = "https://api.themoviedb.org/3/movie/"+movieid+"/reviews?api_key=" + apikey + "&language=en-US&page=1";
    axios.get(url).then(posts=>{
        var cleanResults = [];
        if( posts.data.total_results == 0){
            cleanResults = null;
        }
        else{
            var resultCount = posts.data.total_results;
            
            if(resultCount > 3){
                resultCount = 3;
            }
            var tempAllResult = [];
            for(var i = 0 ; i < resultCount; i++){
                
                temp_author = posts.data.results[i].author;
                temp_content = posts.data.results[i].content ? posts.data.results[i].content: "";
                var monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];

                //var d = new Date("2020-12-18T11:08:08.440Z");
                var d = new Date(String(posts.data.results[i].created_at));
                
                var splitDate = String(d).split(" ");
                var cleanDateTime = monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

                if(posts.data.results[i].author_details["avatar_path"] == null){
                    temp_avatar_path = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU";
                }
                else if(posts.data.results[i].author_details["avatar_path"].includes("http")){
                    temp_avatar_path = posts.data.results[i].author_details["avatar_path"].substring(1);
                }
                else{
                    temp_avatar_path = "https://image.tmdb.org/t/p/original" + posts.data.results[i].author_details["avatar_path"];
                }
                var temp_rating;
                if(posts.data.results[i].author_details["rating"] == null){
                    temp_rating = 0;
                }
                else{
                    temp_rating = posts.data.results[i].author_details["rating"] / 2.0
                }
                tempAllResult.push({
                    author: temp_author,
                    content: temp_content,
                    created_at: cleanDateTime,
                    url: posts.data.results[i].url,
                    rating: temp_rating.toFixed(1),
                    avatar_path: temp_avatar_path});
            }
            cleanResults = tempAllResult;
        }
        res.json(cleanResults);
    }).catch(err=>{
        res.send(err);
    })
});



module.exports = router;