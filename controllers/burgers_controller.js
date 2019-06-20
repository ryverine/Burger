var express = require("express");
var burger = require("../models/burger.js");

module.exports = function(app) 
{
    app.get("/", function(req, res) 
    {
        //console.log("/index");
        burger.getBurgers(function(result)
        {
            res.render("index", { burgers: result });
        });
    });

    /*
    app.get("/api/burgers", function(req, res) 
    {
        console.log("/index");
        burger.getBurgers(function(result)
        {
            //res.render("index", { burgers: result });
            res.json(result);
        });
    });
    */

    app.post("/api/burgers", function(req, res) 
    {
        //res.render("dog", animals[0]);
        //console.log("/api/burgers");
        var newBurger = req.body.burger_name;
        //console.log("newBurger", newBurger);
        burger.addBurger(newBurger, function(result)
        {
            res.json(result);
        });/*, function(result){
            res.json(result);
        });*/
    });

    /*
    router.post("/api/friends", function(req, res) 
{
    var newFriend = req.body;

    for (var i = 0; i < friendsList.length; i++)
    {
        console.log("friendsList["+i+"]" + "\n" + JSON.stringify(friendsList[i]));
    }

    for ( var j = 0; j < newFriend.scores.length; j++)
    {
        var tmpInt = Number.parseInt(newFriend.scores[j]);
        newFriend.scores[j] = tmpInt;
    }

    friends.addFriend(newFriend);
    res.json(newFriend);
});
    
    */

    app.put("/api/:burger", function(req, res) 
    {
        //res.render("dog", animals[0]);
        console.log("/api/:burger");
        // updateBurgerById: function(devouredValue, burgerID)
        // updateBurgerByName: function(devouredValue, burgerName)
    });

    /*app.get("/", function(req, res) 
    {
        console.log("*");
        // res.render("dog", animals[0]);
        // res.sendFile(path.resolve("./views/survey.html"));
    });*/
  
  };

  // 



  