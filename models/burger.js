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
    addBurger: function(burgerName)
    {
        orm.insertOne("burgers", burgerName, false);
    },
    updateBurgerById: function(devouredValue, burgerID)
    {
        return orm.updateOne("burgers","devoured",devouredValue, "id", burgerID);
    },
    updateBurgerByName: function(devouredValue, burgerName)
    {
        return orm.updateOne("burgers", "devoured", devouredValue, "burger_name", burgerName);
    }
};

module.exports = burger;