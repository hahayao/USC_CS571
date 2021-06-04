const express = require('express');
const router = express.Router();
const axios = require('axios');
const { post } = require('jquery');

router.get('/:id', function(req, res){
    let movieid = req.params.id;
    let apikey = "137fc20b5a905d34f51a102de3246f4d";
    let url = "https://api.themoviedb.org/3/tv/"+movieid+"/reviews?api_key=" + apikey + "&language=en-US&page=1";
    axios.get(url).then(posts=>{
        var cleanResults = [];
        if( posts.data.total_results == 0){
            cleanResults = [{total_results: posts.data.total_results}];
        }
        else{
            var resultCount = posts.data.total_results;
            
            if(resultCount > 10){
                cleanResults.push({total_result: 10});
                resultCount = 10;
            }
            else{
                cleanResults.push({total_result: resultCount});
            }
            
            var tempAllResult = [];
            for(var i = 0 ; i < resultCount; i++){
                
                temp_author = "A review created by " + posts.data.results[i].author;
                temp_content = posts.data.results[i].content ? posts.data.results[i].content: "";
                var monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];

                //var d = new Date("2020-12-18T11:08:08.440Z");
                var d = new Date(String(posts.data.results[i].created_at));
                
                var splitDate = String(d).split(" ");
                var cleanDateTime = "Written by "+ temp_author +" on " + monthNames[d.getMonth()] + " " + d.getDate() + ", " +
                d.getFullYear()+ ", ";
                if(d.getHours() > 12){
                var onlyTime = splitDate[4].substring(2);
                    cleanDateTime = cleanDateTime + String(d.getHours() - 12) + onlyTime + "PM";
                }
                else if(d.getHours() == 12){
                    cleanDateTime = cleanDateTime + splitDate[4] + " PM";
                }
                else if(d.getHours() >= 10){
                    cleanDateTime = cleanDateTime + splitDate[4] + " PM";
                }
                else{
                    cleanDateTime = cleanDateTime + splitDate[4].substring(1) + " AM";
                }

                if(posts.data.results[i].author_details["avatar_path"] == null){
                    temp_avatar_path = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU";
                }
                else if(posts.data.results[i].author_details["avatar_path"].includes("http")){
                    temp_avatar_path = posts.data.results[i].author_details["avatar_path"].substring(1);
                }
                else{
                    temp_avatar_path = "https://image.tmdb.org/t/p/original" + posts.data.results[i].author_details["avatar_path"];
                }
                
                tempAllResult.push({
                    author: temp_author,
                    content: temp_content,
                    created_at: cleanDateTime,
                    url: posts.data.results[i].url,
                    rating: posts.data.results[i].author_details["rating"]?posts.data.results[i].author_details["rating"]: 0,
                    avatar_path: temp_avatar_path});
            }
        }
        cleanResults.push({results: tempAllResult});
        
        res.json(cleanResults);
    }).catch(err=>{
        res.send(err);
    })
});



module.exports = router;