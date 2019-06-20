var orm = require("../config/orm.js");

var burger = {
    getBurgers: function(cb)
    {
        //console.log("orm.selectAll('burgers').length = " + orm.selectAll("burgers").length);
        orm.selectAll("burgers", function(result)
        {
           cb(result);
        });
    },
    addBurger: function(burgerName, cb)
    {
        orm.insertOne("burgers", burgerName, false, function(result)
        {
            cb(result);
        });
    },
    updateBurgerById: function(devouredValue, burgerID, cb)
    {
        orm.updateOne("burgers","devoured",devouredValue, "id", burgerID, function(result)
        {
            cb(result);
        });
    }
};

module.exports = burger;