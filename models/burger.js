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
    updateBurgerById: function(devouredValue, burgerID)
    {
        return orm.updateOne("burgers","devoured",devouredValue, "id", burgerID);
    }
};

module.exports = burger;