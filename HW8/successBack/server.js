var express = require('express');
const cors = require('cors');
//a
const path = require('path');
var posts = require('./posts');
var navSearch = require('./navSearch');
var currentMovie = require('./currentMovie');
var movieDetail = require('./movieDetail');
var movieDetailExpand = require('./movieDetailExpand');
var movieCast = require('./movieCast');
var movieCastDetail = require('./movieCastDetail');
var movieCastExternID = require('./movieCastExternID');
var movieReview = require('./movieReview');
var movieRecommend= require('./movieRecommend');
var movieSimilar= require('./movieSimilar');
var tvCast = require('./tvCast');
var tvDetail = require('./tvDetail');
var tvDetailExpand = require('./tvDetailExpand');
var tvRecommend = require('./tvRecommend');
var tvReview = require('./tvReview');
var tvSimilar = require('./tvSimilar');
var popularmovie = require('./popularmovie');
var topRatedMovie = require('./topRatedMovie');
var trendingMovie = require('./trendingMovie');
var tvhome = require('./tvhome');

var app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist/CS571HW8')));
app.use('/apis/posts', posts);
app.use('/apis/navSearch', navSearch);
app.use('/apis/currentMovie', currentMovie);
app.use('/apis/movieDetail', movieDetail);
app.use('/apis/movieDetailExpand', movieDetailExpand);
app.use('/apis/movieCast', movieCast);
app.use('/apis/movieCastDetail', movieCastDetail);
app.use('/apis/movieCastExternID', movieCastExternID);
app.use('/apis/movieReview', movieReview);
app.use('/apis/movieRecommend', movieRecommend);
app.use('/apis/movieSimilar', movieSimilar);
app.use('/apis/tvCast', tvCast);
app.use('/apis/tvDetail', tvDetail);
app.use('/apis/tvDetailExpand', tvDetailExpand);
app.use('/apis/tvRecommend', tvRecommend);
app.use('/apis/tvReview', tvReview);
app.use('/apis/tvSimilar', tvSimilar);
app.use('/apis/popularmovie', popularmovie);
app.use('/apis/topRatedMovie', topRatedMovie);
app.use('/apis/trendingMovie', trendingMovie);
app.use('/apis/tvhome', tvhome);
//a

//delete this line
/*app.get('/', function(req, res){
    res.send('Hello World');
})*/
//a
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname, '/dist/CS571HW8/index.html'));
})

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});


module.exports = app;