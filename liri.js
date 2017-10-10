//Grab the fs package to handle read/write. 
var fs = require("fs");

fs.writeFile("random.txt", "")

//Store the textfile filename given to us from the command line.
var twitter = require("twitter");
var spotify = require("spotify");
var inquirer = require("inquirer");
var keys = require("./keys");

var textFile = process.argv[2];

//Twitter username inside of a parameter object.
var params = {
	screen_name: "stjones1920"
} && {
	count: 20
};


//A function to grab the tweets from Twitter.
function getTwitter() {

}

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