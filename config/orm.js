var connection = require("./connection.js");

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values


var orm = {
    selectAll: function(tableInput) 
    {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableInput, function(err, result) 
        {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(tableInput,burgerNameInput,devouredInput) 
    {
        var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?,?)";
        connection.query(queryString, [tableInput,burgerNameInput,devouredInput], function(err, result) 
        {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(tableInput,colChangeInput,dataChangeInput,colMatchInput,dataMatchInput) 
    {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableInput,colChangeInput, dataChangeInput,colMatchInput,dataMatchInput], function(err, result) 
        {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;
