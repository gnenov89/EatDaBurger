// Import the ORM
var orm = require("..config/orm.js");

var burger = {
// Select all burger table entries
selectAll: function(cb) {
    orm.selectAll("burgers", function(res){
    cb(res);
});
},


// Set the variables cols and vasl as arrays
insertOne : function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res){
       cb(res); 
    });
},

// THe objColvals is an obejct specifying colums as objects keys with associated values 
updateOne:function(objColVals, condition, cb){
    orm.updateOne("burgers", objColVals, condition, function(res){
        cb(res);
    });
  }
};
 
// Export the databse function for the controller(burgerControlller.js)
module.exports = burger;