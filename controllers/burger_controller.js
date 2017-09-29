// Dependencies
var express = require("express");
// defining express as a router
var route = express.Router();

// import burger.js
var burger = require("../models/burger.js");

// Create the routes and associated logic
router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject ={

            burgers:data
        };
        // console.log(hbsObject);

        res.render("index", hbsObject);
    });
});

router.post("/burgers", function(req, res){
    burger.insertOne([
        "burger_name"
    ],[
        req.body.burger_name
    ], function(data) {
        res.redirect("/");
    });
});

router.put("/burgers/:id", function(req, res){
    var condition = "id= " + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition, function(data){
        res.redirect("/");
    
    });
});
// export module for server.js to use
module.exports = router;
