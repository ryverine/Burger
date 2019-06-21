
$(document).ready(function() 
{
    currentBurgers = [];

    createDevourButtons();

    function createDevourButtons()
    {
        var listOfBurgers = $('.burgerData');
    
        for(var i = 0; i < listOfBurgers.length; i++)
        {
            // var burgerName = $(listOfBurgers[i]).contents().text().trim();

            // TRY THIS
            // https://api.jquery.com/find/
            // 
            
            

            var burgerName  = $(listOfBurgers[i]).find("p.burgerName").text().trim();

            //alert("BURGER NAME 2: " + burgerName2);

            

            // BETTER TO APPEND BUTTON TO <P>, not <DIV>

            currentBurgers.push(burgerName);

            var divID = $(listOfBurgers[i]).attr("id");

            var burgerID = divID.slice(11);
       
            var button = $("<button>");
            button.attr("type", "button");
            button.attr("id", "btn-burger-" + burgerID);
            button.attr("class", "btn");
            button.addClass("devourButton");
            button.text("Devour It!");

            // $(listOfBurgers[i]).append(button);

            $(listOfBurgers[i]).find("p.burgerName").prepend(button);
        }
    }


    function refreshBurgerList()
    {
        // currentBurgers = [];
        // createDevourButtons();
    }


    $("#btn-submit").on("click", function(event) 
    {
        event.preventDefault();

        var burgerName = $("#newBurger").val().trim();
        $("#newBurger").val("");

        if(burgerName != "" && burgerName.length > 1)
        {
            var burgerExists = false;
            for(var i = 0; i < currentBurgers.length; i++)
            {
                if (currentBurgers[i].toLowerCase() === burgerName.toLowerCase())
                {
                    burgerExists = true;
                    break;
                }
            }

            if(!burgerExists)
            {
                currentBurgers.push(burgerName);

                var newBurger = {burger_name: burgerName};

                $.ajax("/api/burgers", 
                {
                    type: "POST",
                    data: newBurger
                }).then(function(data) 
                {
                    // console.log("created new burger");
                    // console.log("data", data);
                    
                    // Reload the page to get the updated list
                    location.reload();
                });
            }
        }
    });


	$(document).on("click", "button.devourButton", function()
	{
        var buttonID = $(this).attr("id");
        var burgerID = buttonID.slice(11);
        
        var burger = {
            devoured: true
        };

        $.ajax("/api/burgers/" + burgerID, 
        {
            type: "PUT",
            data: burger
        }).then(function(data) 
        {
            console.log("/api/burgers/burgerID -> data", data);
            // Reload the page to get the updated list
            location.reload();
            // location.reload(true);
        });
    });

});

