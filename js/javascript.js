var coins;

var init = function () {
    coins = -1;

    updateClick();
 
    };

var updateClick = function () {
    coins++;  
    $("#coin-counter").text(coins);
};

$("#gold-mine").on("click", function () {//jquery object
    updateClick();
});

$("#intro-button").on("click", function() {
    $("#intro-text-container").addClass("hide");
});

init();