
$(document).ready(function() 
{
    createDevourButtons();

    function createDevourButtons()
    {
        var listOfBurgers = $('.burgerData');
    
        for(var i = 0; i < listOfBurgers.length; i++)
        {
       
            var burgerName = $(listOfBurgers[i]).contents().text();

            //alert("burgerName = " + burgerName);

            var button = $("<input>");
            button.attr("type", "button");
            button.attr("name", burgerName);
            button.attr("class", "devourButton");
            button.attr("value", "Devour It!");

            $(listOfBurgers[i]).append(button);
    
        }
    }




    $("#btn-submit").on("click", function(event) 
    {
        event.preventDefault();

        var burgerName = $("#newBurger").val().trim();

        //alert("New Burger = " + burgerName);
    });

});

