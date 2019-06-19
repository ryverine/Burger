
$(document).ready(function() 
{
    $("#btn-submit").on("click", function(event) 
    {
        event.preventDefault();

        var burgerName = $("#newBurger").val().trim();

        alert("New Burger = " + burgerName);
    });

});

