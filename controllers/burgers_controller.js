
var express = require("express");
var exphbs = require("express-handlebars");

var burger = require("../models/burger.js");

module.exports = function(app) 
{
    // home
    app.get("/api/all", function(req, res) 
    {
        console.log("/api/all");
      
        burger.getBurgers(function(result)
        {
            console.log("burgers_controller result", result);
            // data = result;
            res.render("index", { burgers: result });
        });

        //console.log("burgers_controller -> /api/all -> data", data);

        /*
        app.get("/icecreams", function(req, res) 
        {
            res.render("ics", { ics: icecreams });
        });
        */
        
        // console.log("res = ", res);

    });

    app.post("/api/add", function(req, res) 
    {
        //res.render("dog", animals[0]);
        console.log("/api/add");
        // addBurger: function(burgerName)
    });

    app.put("/api/:burger", function(req, res) 
    {
        //res.render("dog", animals[0]);
        console.log("/api/:burger");
        // updateBurgerById: function(devouredValue, burgerID)
        // updateBurgerByName: function(devouredValue, burgerName)
    });

    app.get("*", function(req, res) 
    {
        console.log("*");
        // res.render("dog", animals[0]);
        // res.sendFile(path.resolve("./views/survey.html"));
    });
  
  };

  // 



  