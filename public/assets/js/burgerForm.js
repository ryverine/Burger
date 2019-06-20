
$(document).ready(function() 
{
    currentBurgers = [];

    createDevourButtons();

    function createDevourButtons()
    {
        var listOfBurgers = $('.burgerData');
    
        for(var i = 0; i < listOfBurgers.length; i++)
        {
            var burgerName = $(listOfBurgers[i]).contents().text().trim();

            currentBurgers.push(burgerName);

            var button = $("<button>");
            button.attr("type", "button");
            button.attr("name", burgerName);
            button.attr("class", "devourButton");
            //button.attr("value", "Devour It!");
            button.text("Devour It!");

            $(listOfBurgers[i]).append(button);
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
                var newBurger = {burger_name: burgerName};
                /*$.post("/api/burgers", newBurger).then(function(data) 
                {
                    $("#newBurger").val("");
                    // REFRESH BURGER LIST
                });*/

                  // Send the POST request.
                $.ajax("/api/burgers", 
                {
                    type: "POST",
                    data: newBurger
                }).then(function(data) 
                {
                    console.log("created new burger");

                    console.log("data", data);
                    
                    // Reload the page to get the updated list
                    location.reload();
                });
            }
        }

        //alert("New Burger = " + burgerName);
    });


	$(document).on("click", "button.devourButton", function()
	{
        console.log("DEVOUR BUTTON CLICKED!" + "\n" +
        "Button Name = " + $(this).attr("name"));
        // "Button ID = " + $(this).attr("id")  + "\n" +
    });


    /*
				function addFriend(newFriend)
				{
					$.post("/api/friends", newFriend).then(function(data) 
					{
						$("#name").val("");
						photo: $("#imgUrl").val("");
						$("#ans-01").val("");
						$("#ans-02").val("");
						$("#ans-03").val("");
						$("#ans-04").val("");
						$("#ans-05").val("");
						$("#ans-06").val("");
						$("#ans-07").val("");
						$("#ans-08").val("");
						$("#ans-09").val("");
						$("#ans-10").val("");

						alert("Thank you!" + "\n" + "Survey submitted.");
					});
				}
    */

});

