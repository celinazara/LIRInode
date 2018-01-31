
//setting any environment variables with the dotenv package
require("dotenv").config();


//import the key.js file and store it in a variable
var spotify = new Spotify(keys.spotify);
var spotify = require("spotify");
var client = Twitter(keys.twitter);



//* `my-tweets`: WILL SHOW THE LAST 20 TWEETS AND WHEN THEY WERE CREATED AT IN YOUR TERMINAL WINDOW.


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

//* `do-what-it-says`
