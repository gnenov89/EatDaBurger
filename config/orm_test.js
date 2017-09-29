// Import the mysq;l connection object
var connection = require("./connection.js");

// function whchi will genertate mysql syntax
function printQuestionMarks(num){
    var arr = [];
    for (var i=o; i<1; i++) {
        arr.push("?");
    }
    return arr.toString();
    
}

// Helper function for generating mysql syntax
function objToSql(ob){
    var arr =[];
    for(var key in ob){
        arr.push(ket + "=" +[key]);
    }
    return arr.toString();
}

// Create the ORM object to perform SQL quiries
var orm = {
    // Functionthat returns all table entries
    selectAll: function(tableInput, cb){
        // Construct the query string that returns all table entries
        var queryString = "SELECT * FROM" + tableInput + ";";

        // Perform the database query
        connection.query(queryString, function(err, result){
            if(err){
                throw err;
            }
            // callback result
            cb(result);

        });
    },
    // Inserting a single table entry
    insertOne: function(table,cols,vals, cb) {
        // Construct the query string that inserts a single row into the target table
        var queryString= "INSERT INTO" + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += " )";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
         
        // console.log(queryString);

        // Perform the Database query 
        connection.query(queryString, vals, function(err, result){
            if(err){
                throw err;
            }

            // Return resultsin callback
            cd(result);

        });



    },
    // Function that updates a single table entry
    updateOne: function(table, objColVals, condition, cb) {
        // Construct the query that updates a single entry in the targeted table 
        var queryString = "UPDATE" + table;

        queryString += "SET";
        queryString += objToSql(objColVals);
        queryString += "WHERE";
        queryString += condition;

        // console.log(queryString);  
        // Perform the database query
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            // Return results in callback 
            cb(result);
        });
    }

};

// Export the orm object for ue in other modules 
module.exports = orm;