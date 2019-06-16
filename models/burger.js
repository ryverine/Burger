var orm = require("./config/orm.js");

var burgers = {
    getBurgers: function()
    {
        orm.selectAll("burgers");
    },
    addBurger: function(burgerName)
    {
        orm.insertOne("burgers", burgerName, false);
    },
    updateBurgerById: function(devouredValue, burgerID)
    {
        orm.updateOne("burgers","devoured",devouredValue, "id", burgerID);
    },
    updateBurgerByName: function(devouredValue, burgerName)
    {
        orm.updateOne("burgers", "devoured", devouredValue, "burger_name", burgerName);
    }
};

module.exports = burger;