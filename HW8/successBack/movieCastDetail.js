const express = require('express');
const router = express.Router();
const axios = require('axios');
const { post } = require('jquery');

router.get('/:id', function(req, res){
    let castid = req.params.id;
    let apikey = "137fc20b5a905d34f51a102de3246f4d";
    let url = "https://api.themoviedb.org/3/person/"+castid+"?api_key=" + apikey + "&language=en-US&page=1";
    axios.get(url).then(posts=>{
//console.log(posts.data);
        temp_alsoknown = "";
        if(posts.data.also_known_as.length != 0){
            for(var i = 0 ; i < posts.data.also_known_as.length; i++){
                temp_alsoknown += posts.data.also_known_as[i];
                temp_alsoknown += ","
            };
            
            temp_alsoknown = temp_alsoknown.slice(0, -1);
        }
        temp_gender = (posts.data.gender? posts.data.gender: "");
        if(temp_gender != ""){
            if(temp_gender == "1"){
                temp_gender = "Female";
            }
            else{
                temp_gender = "Male";
            }
        }
        tempResult = {
            birthday: (posts.data.birthday? posts.data.birthday: ""),
            gender: temp_gender,
            name: (posts.data.name? posts.data.name: ""),
            homepage: (posts.data.homepage? posts.data.homepage: ""),
            also_known_as: temp_alsoknown,
            known_for_department: (posts.data.known_for_department? posts.data.known_for_department: ""),
            biography: (posts.data.biography? posts.data.biography: ""),
            profile_path: "https://image.tmdb.org/t/p/w500"+posts.data.profile_path,
            place_of_birth: (posts.data.place_of_birth? posts.data.place_of_birth: "")
        };
        //console.log(tempResult);
        res.json(tempResult);
    }).catch(err=>{
        res.send(err);
    })
    });

module.exports = router;