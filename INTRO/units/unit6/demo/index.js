const cards = {
    "start": {
        "cardTitle": "Do you want to go to the Bakery?",
        "cardImage": "https://media.istockphoto.com/vectors/bakery-shop-building-facade-with-signboard-vector-id1176946222?k=20&m=1176946222&s=612x612&w=0&h=Ss9j_fMfYelT1hBVqQx9a-q9YWIlB3avioxPWSR_IQQ=",
        "buttons": {
            "optionOneText": "Yes",
            "optionTwoText": "No",
            "optionOneLink": "cake",
            "optionTwoLink": "end"
        }
    },
    "cake": {
        "cardTitle": "They're serving Cake, you can afford Brown or Pink?",
        "cardImage": "https://t3.ftcdn.net/jpg/03/27/07/62/360_F_327076285_G5pC7nCKzueIE4rczZHoNNvSgEfzAhPH.jpg",
        "buttons": {
            "optionOneText": "Brown",
            "optionTwoText": "Pink",
            "optionOneLink": "cutlery",
            "optionTwoLink": "cutlery"
        }
    },
    "cutlery": {
        "cardTitle": "Should you use a Fork or Spoon?",
        "cardImage": "https://picsum.photos/id/155/400/400",
        "buttons": {
            "optionOneText": "Sharp Knife",
            "optionTwoText": "Spoon",
            "optionOneLink": "dead",
            "optionTwoLink": "choke"
        }
    },
    "choke": {
        "cardTitle": "Cake is stuck in your throat! What should you do?",
        "cardImage": "https://picsum.photos/id/277/400/400",
        "buttons": {
            "optionOneText": "Drink Water",
            "optionTwoText": "Choke",
            "optionOneLink": "fail",
            "optionTwoLink": "dead"
        }
    },
    "fail": {
        "cardTitle": "It didn't work! What Now!!",
        "cardImage": "https://picsum.photos/id/300/400/400",
        "buttons": {
            "optionOneText": "Keep Drinking!",
            "optionTwoText": "Jump Outside Window",
            "optionOneLink": "dead",
            "optionTwoLink": "window"
        }
    },
    "window": {
        "cardTitle": "You landed on a rock and the cake popped out",
        "cardImage": "https://picsum.photos/id/444/400/400",
        "buttons": {
            "optionOneText": "Thank the rock",
            "optionTwoText": "Get more cake",
            "optionOneLink": "happyEnd",
            "optionTwoLink": "dead"
        }
    },
    "dead": {
        "cardTitle": "You're Dead. :(",
        "cardImage": "https://picsum.photos/id/200/400/400",
        "buttons": null
    },
    "end": {
        "cardTitle": "Sorry!",
        "cardImage": "https://picsum.photos/id/134/400/400",
        "buttons": null
    },
    "happyEnd": {
        "cardTitle": "You Win!",
        "cardImage": "https://picsum.photos/id/3/400/400",
        "buttons": null
    },
};

const showCard = function(cardId) {
    console.info("invoking showCard() function with cardId argument=" + cardId);
    let cardData = cards[cardId];
    let buttons = cardData["buttons"];

    $("#cardTitle").text(cardData["cardTitle"]);
    $("#cardImage").attr("src", cardData["cardImage"]);

    if (buttons) {
        $("#optionOne").text(buttons["optionOneText"]);
        $("#optionOne").off();
        $("#optionOne").click(function() {
            showCard(buttons["optionOneLink"]);
        });

        $("#optionTwo").text(buttons["optionTwoText"]);
        $("#optionTwo").off();
        $("#optionTwo").click(function() {
            showCard(buttons["optionTwoLink"]);
        });
    } else {
        $("#optionOne").hide();
        $("#optionTwo").hide();
    }
};

showCard("start");
