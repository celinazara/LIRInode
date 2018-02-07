
//setting any environment variables with the dotenv package
require("dotenv").config();


//import the key.js file and store it in a variable
var spotify = new Spotify(keys.spotify);
var Spotify = require("node-spotify-api");
var Twitter = Twitter("twitter");
var request =require("request");
var keys = require("./keys");
var fs = require("fs");




//* `my-tweets`: WILL SHOW THE LAST 20 TWEETS AND WHEN THEY WERE CREATED AT IN YOUR TERMINAL WINDOW.
var getMyTweets = function() {
  var client = new Twitter(keys.twitter);
  var params = {
    screen_name: "not_annAssassin"
  };
  client.get("statuses/user_timeline", params, function(error, tweets, response) {
    if (!error) {
      for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].created_at);
        console.log("");
        console.log(tweets[i].text);
      }
    }
  });
};

//* `spotify-this-song`'<song name here'>: 
		//SHOWS INFO IN TERMINAL:
		//ARTIST, SONG'S NAME, PREVIEW LINK OF THE SONG FROM SPOTIFY, ALNUM THAT THE SONG IS FROM, GOES TO DEFAULT "THE SIGN BY ACE OF BASE"
function spotifyThisSong(songName) {
		var songName = process.argv[3];
		if(!songName){
			songName = "The Sign";
		}
		params = songName;
		spotify.search({ type: "track", query: params }, function(err, data) {
			if(!err){
				var songInfo = data.tracks.items;
				for (var i = 0; i < 5; i++) {
					if (songInfo[i] != undefined) {
						var spotifyResults =
						"Artist: " + songInfo[i].artists[0].name + "\r\n" +
						"Song: " + songInfo[i].name + "\r\n" +
						"Album the song is from: " + songInfo[i].album.name + "\r\n" +
						"Preview Url: " + songInfo[i].preview_url + "\r\n" + 
						"------------------------------ " + i + " ------------------------------" + "\r\n";
						console.log(spotifyResults);
						log(spotifyResults); 
					}
				}
			}	else {
				console.log("Error :"+ err);
				return;
			}
		});
	};






//* `movie-this` '<movie name here'>:
		// SHOWS IN TERMINAL:
		//TITLE OF MOVIE, YEAR, IMBD RATING, COUNTRY, LANGUAGE, PLOT,ACTORS, DEFAULT:MR.NOBODY
		//USE 'trilogy' FOR OMDB API
var getMeMovie = function(movieName) {
  if (movieName === undefined) {
    movieName = "Mr Nobody";
  }
  var urlHit = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=trilogy";
  request(urlHit, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var jsonData = JSON.parse(body);
      console.log("Title: " + jsonData.Title);
      console.log("Year: " + jsonData.Year);
      console.log("Rated: " + jsonData.Rated);
      console.log("IMDB Rating: " + jsonData.imdbRating);
      console.log("Country: " + jsonData.Country);
      console.log("Language: " + jsonData.Language);
      console.log("Plot: " + jsonData.Plot);
      console.log("Actors: " + jsonData.Actors);
      console.log("Rotton Tomatoes URL: " + jsonData.tomatoURL);
    }
  });
};
//* `do-what-it-says`
