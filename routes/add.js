var data = require("../data.json");

exports.addFriend = function(req, res) {  
	// Your code goes here
	console.log('addFriend called');
//get parameter values
	var name = req.query.name;
	var description = req.query.description;

	//add new friend to our database
	var newFriend = {
		"name": name,
		"description": description,
		"imageURL": "http://lorempixel.com/400/400/people"
	}

	data.friends.push(newFriend)
	
	//Take you bakc to index route
	res.redirect('/');
}