//Grab the fs package to handle read/write. 
var fs = require("fs");
var request = require("request");

//The code needed to grab the data from keys.js for #7
var keys = require("./keys.js");

//Store the textfile filename given to us from the command line.
var twitter = require("twitter");
var spotify = require("spotify");
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

var spotifyClient = new Spotify ({

	client_id: keys.spotifyKeys.client_id,
	client_secret: client_secret.spotifyKeys.client_secret
});

	//search for an artist, album, or track.
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "6f4aaed4a45c4355b8f5b3e16da0ce5c",
  secret: "1c37838e46904e7385237f1f677203ba"
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});



//a preview link of the song from Spotify
//the album that the song is from
//If no song is provided then the program will default to "The Sign" by Ace of Base.
//

// //Append the contents into the file.
// fs.appendFile(randomtxt, "", function(err) {
	
// 	//If an error is experienced we display it here:
// 	if (err) {
// 		console.log(err);
// 	}

// 	//If no error is experienced we'll log this phrase "Content Added".
// 	else {
// 		console.log("Content Added!");
// 	}
// });