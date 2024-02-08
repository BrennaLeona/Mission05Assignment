// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$("#btnSubmit").click(function (event) {
    event.preventDefault
    //Get variables
    var numHours = parseInt($("#numHours").val());
    var rate = parseInt($("#rate").val());

    //Check for correct numbers
    if (numHours <= 0 || isNaN(numHours)) { 
        alert("Photoshoot length must be a positive number");
    }
    //Calculate and post
    else {
        var total = numHours * rate;
        $("#output").text("$" + total.toFixed(2));
    }
});