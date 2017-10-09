//Grab the fs package to handle read/write. 
var fs = require("fs");

fs.writeFile("random.txt", "")

//Store the textfile filename given to us from the command line.
var textFile = process.argv[2];

//Append the contents into the file.
fs.appendFile(randomtxt, "", function(err) {
	
	//If an error is experienced we display it here:
	if (err) {
		console.log(err);
	}

	//If no error is experienced we'll log this phrase "Content Added".
	else {
		console.log("Content Added!");
	}
});