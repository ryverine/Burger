var connection = require("./connection.js");

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values


var orm = {
    selectAll: function(tableInput, cb) 
    {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableInput, function(err, result) 
        {
            if (err) throw err;
            //console.log("SELECT * FROM ??");
            //console.log("selectAll: result.length = " + result.length);
            cb(result);
        });
    },
    insertOne: function(tableInput,burgerNameInput,devouredInput, cb) 
    {
        var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?,?)";
        connection.query(queryString, [tableInput,burgerNameInput,devouredInput], function(err, result) 
        {
            if (err) throw err;
            // console.log("INSERT INTO ?? (burger_name, devoured) VALUES (?,?)");
            // console.log(result);
            //return result;
            cb(result);
        });
    },
    updateOne: function(tableInput,colChangeInput,dataChangeInput,colMatchInput,dataMatchInput) 
    {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableInput,colChangeInput, dataChangeInput,colMatchInput,dataMatchInput], function(err, result) 
        {
            if (err) throw err;
            // console.log("UPDATE ?? SET ?? = ? WHERE ?? = ?");
            // console.log(result);
            return result;
        });
    }
};

module.exports = orm;



/*

// Create a new plan
app.post("/api/movies", function(req, res) {
  connection.query("INSERT INTO moviess (movie) VALUES (?)", [req.body.plan], function(err, result) {
    if (err) {
      return res.status(500).end();
    }

    // Send back the ID of the new plan
    res.json({ id: result.insertId });
    console.log({ id: result.insertId });
  });
});

*/