const hideAllCards = function() {
    $(".card").hide();
};

const showCard = function(toShow) {
    hideAllCards();
    $(toShow).show();
};

$(".cake").click(function() {
    showCard("#cake");
});

$(".end").click(function() {
    showCard("#end");
});

$(".cutlery").click(function() {
    showCard("#cutlery");
});

$(".choke").click(function() {
    showCard("#choke");
});

$(".dead").click(function() {
    showCard("#dead");
});

$(".fail").click(function() {
    showCard("#fail");
});
