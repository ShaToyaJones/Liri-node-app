//Grab the fs package to handle read/write. 
var fs = require("fs");
var request = require("request");

//The code needed to grab the data from keys.js for #7
var keys = require("./keys.js");

//Store the textfile filename given to us from the command line.
var twitter = require("twitter");
var spotify = require("spotify");
var omdb = require("omdb");
var inquirer = require("inquirer");
var liriCommand = process.argv[2];

switch (liriCommand) {
	case "my-tweets": 
	getTwitter();
	break;

	case "spotify-this-song":
	getSpotify();
	break;

	case "movie-this":
	getMovieInfo();
	break;

	case "do-what-it-says":
	random();
	break;
}

//A function to grab the tweets from Twitter.
function getTwitter() {

var client = new Twitter ({
	consumer_key: keys.twitterKeys.consumer_key,
	consumer_secret: keys.twitterKeys.consumer_secret,
	access_token_key: keys.twitterKeys.access_token_key,
	access_token_secret: keys.twitterKeys.access_token_secret
});

//Twitter username inside of a parameter object.
var params = {
	screen_name: "stjones1920",
	count: 20};
	client.get("statuses/user_timeline", params, function(error, tweets, response) {
		if (!error) {
			console.log(tweets);
		}
	});
};

function getSpotify() {

//search for an artist, album, or track.
var Spotify = require("node-spotify-api");
 
var spotify = new Spotify({
  client_id: keys.spotifyKeys.client_id,
  client_secret: keys.spotifyKeys.client_secret
});
 
spotify.search({ type: "track", query: song }, function(err, data) {
  if (err) {
    return console.log("Error occurred: " + err);
  }
 
console.log(data); 
});

//A preview link of the song from Spotify.

//The album that the song is from.

//If no song is provided then the program will default to "The Sign" by Ace of Base.

function getOmbd() {
	omdb.search({
	    search: "game of thrones", 
	    // optionnal  ['series', 'episode', 'movie'] 
	    type: "series",
	    year: "2011", 
	    // optionnal (1 to 100)
	    page: "1" 
	}).then(res => {
	    console.log("got response:", res);
	}).catch(console.error);
	 
	omdb.get({
	    id: "tt0944947",            // optionnal (requires imdbid or title) 
	    title: "Game of Thrones",   // optionnal (requires imdbid or title) 
	    season: 1,                  // optionnal 
	    episode: 1,                 // optionnal 
	    // optionnal ['series', 'episode', 'movie']
	    type: "series",
	    plot: "full",               // optionnal (defaults to 'short') 
	    // optionnal (get rotten tomatoes ratings)
	    tomatoes: true,
	    year: "2011"
	}).then(res => {
	    console.log('got response:', res);
	}).catch(console.error);
}

// *****************Need to add:*************
//Country where the movie was produced.
// Language of the movie.
// Actors in the movie.