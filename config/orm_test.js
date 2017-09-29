// Import the ORM adn connection objects 
var orm = require("./orm.js");

// Import the connection file directory 
var connection = require("./connection.js");

// Select all entries from database 
orm.selectAll("burgers", function(data){
    console.log("orm.selectAll test...\n\n");

    console.log("______Burger Menu________\n");


    for (var i = 0; i < data.length; i++) {
        console.log("Burger ID = " + data[i].burger_name);
        console.log("Burger Name" + data[i].burger_name);
        console.log("Available" + data[i].devoured);
        console.log("++++++++++++++++++++");
    }
});

// Insert a single nentry into the database 
orm.insertOne(
    "burgers",
    ["burger_name", "devoured"],
    ["Success Story Mushroom Double-Stack Burger", false],
    function(data){
        console.log("\n\norm.insertOne test...\n\n");

        console.log("Insert new row with ID = " +data.insertId + "\n\n");
    });

    // Update a single entry in the database
orm.updateOne('burgers', {devoured: true}, 'id = 7', function (data) {
	console.log('\n\norm.updateOne test...\n\n');

	console.log('Result: ' + data.message);
});

connection.end();