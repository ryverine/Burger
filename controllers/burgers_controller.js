
var express = require("express");

var burger = require("../models/burger.js");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

module.exports = function(app) 
{
    // home
    app.get("/api/all", function(req, res) 
    {
        //res.render("dog", animals[0]);
        console.log("/api/all");
       //  getBurgers: function()
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



  