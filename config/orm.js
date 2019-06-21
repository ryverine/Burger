var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb) 
    {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableInput, function(err, result) 
        {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableInput,burgerNameInput,devouredInput, cb) 
    {
        var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?,?)";
        connection.query(queryString, [tableInput,burgerNameInput,devouredInput], function(err, result) 
        {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(tableInput,colChangeInput,dataChangeInput,colMatchInput,dataMatchInput, cb) 
    {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableInput,colChangeInput, dataChangeInput,colMatchInput,dataMatchInput], function(err, result) 
        {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;
