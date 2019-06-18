var express = require("express");
var burger = require("../models/burger.js");

module.exports = function(app) 
{
    // home
    app.get("/api/all", function(req, res) 
    {
        console.log("/api/all");
        
        /*var burgerData = [
            {
                id: "test001",
                burger_name: "burger001",
                devoured: false
            },
            {
                id: "test002",
                burger_name: "burger002",
                devoured: false
            },
            {
                id: "test003",
                burger_name: "burger003",
                devoured: false
            }
        ];

        res.render("index", { burgers: burgerData });*/


        
        burger.getBurgers(function(result)
        {
            console.log("burgers_controller result", result);
            
            res.render("index", { burgers: result });
        });
        

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

    /*app.get("/", function(req, res) 
    {
        console.log("*");
        // res.render("dog", animals[0]);
        // res.sendFile(path.resolve("./views/survey.html"));
    });*/
  
  };

  // 



  