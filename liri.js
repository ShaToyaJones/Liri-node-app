//Grab the fs package to handle read/write. 
var fs = require("fs");

fs.writeFile("random.txt", "")

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
// } && {
// 	count: 20
	});
};

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