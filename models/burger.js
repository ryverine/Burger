var orm = require("../config/orm.js");

var burger = {
    getBurgers: function(cb)
    {
        //console.log("orm.selectAll('burgers').length = " + orm.selectAll("burgers").length);
        orm.selectAll("burgers", function(result)
        {
            var data = result;
            // data is an array of objects
            cb(data);
        });
    },
    addBurger: function(burgerName)
    {
        return orm.insertOne("burgers", burgerName, false);
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