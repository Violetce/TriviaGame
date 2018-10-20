
var timer = 0;
var intervalId;
var win = 0;
var lose = 0;

var question = ["What is a baby horse called?", "What is a blacksmith/farrier?", "What is the hair along the top of a horse's neck called?", "Would you like to play again?"];

var answerOne = ["Mare", "Just another name for a cowboy!", "Fashion.", "You answered: " + win + " questions correctly!"];
var answerTwo = ["Pony", "That's what they call a guy that races horses", "I dunno. Hair?", "You answered: " + lose + " questions incorrectly!"];
var answerThree = ["Calf", "A fairy? Why are you asking me about a fairy?", "Tail", ""];
var answerFour = ["Foal", "That guy that works on my horse's hooves", "Mane", ""];




count = function () {
    timer = timer + 1;
    $("#timeRemain").text(timer);
}
var i = 0;

window.onload = function () {
    $("#question").text(question[0]);
    $("#answerOne").text(answerOne[0]);
    $("#answerTwo").text(answerTwo[0]);
    $("#answerThree").text(answerThree[0]);
    $("#answerFour").text(answerFour[0]);

    if (i < 4) {
        timer = 0;

        intervalId = setInterval(function () {
            count();
        }, 1000);

        $("#question").text(question[i]);
        $("#answerOne").text(answerOne[i]);
        $("#answerTwo").text(answerTwo[i]);
        $("#answerThree").text(answerThree[i]);
        $("#answerFour").text(answerFour[i]);

        if (timer > 10) {
            prompt("You lose!");
            lose = lose + 1;
            i = i + 1;
            $("#question").text(question[i]);
            $("#answerOne").text(answerOne[i]);
            $("#answerTwo").text(answerTwo[i]);
            $("#answerThree").text(answerThree[i]);
            $("#answerFour").text(answerFour[i]);
            clearInterval(intervalId);
            timer = 0;
            intervalId = setInterval(function () {
                count();
            }, 1000);

        } else {

            $("#answerOne").on("click", function (event) {
                prompt("You lose!");
                lose = lose + 1;
                i = i + 1;
                $("#question").text(question[i]);
                $("#answerOne").text(answerOne[i]);
                $("#answerTwo").text(answerTwo[i]);
                $("#answerThree").text(answerThree[i]);
                $("#answerFour").text(answerFour[i]);
                clearInterval(intervalId);
                timer = 0;
                intervalId = setInterval(function () {
                    count();
                }, 1000);
            })
            $("#answerTwo").on("click", function (event) {
                prompt("You lose!");
                lose = lose + 1;
                i = i + 1;
                $("#question").text(question[i]);
                $("#answerOne").text(answerOne[i]);
                $("#answerTwo").text(answerTwo[i]);
                $("#answerThree").text(answerThree[i]);
                $("#answerFour").text(answerFour[i]);
                clearInterval(intervalId);
                timer = 0;
                intervalId = setInterval(function () {
                    count();
                }, 1000);
            })
            $("#answerThree").on("click", function (event) {
                prompt("You lose!");
                lose = lose + 1;
                i = i + 1;
                $("#question").text(question[i]);
                $("#answerOne").text(answerOne[i]);
                $("#answerTwo").text(answerTwo[i]);
                $("#answerThree").text(answerThree[i]);
                $("#answerFour").text(answerFour[i]);
                clearInterval(intervalId);
                timer = 0;
                intervalId = setInterval(function () {
                    count();
                }, 1000);
            })
            $("#answerFour").on("click", function () {
                prompt("You Win!");
                win = win + 1;
                i = i + 1;
                $("#question").text(question[i]);
                $("#answerOne").text(answerOne[i]);
                $("#answerTwo").text(answerTwo[i]);
                $("#answerThree").text(answerThree[i]);
                $("#answerFour").text(answerFour[i]);
                clearInterval(intervalId);
                timer = 0;
                intervalId = setInterval(function () {
                    count();
                }, 1000);
            })

        }
        if (i === 3) {
            $("#wins").text("You answered: " + win + " questions correctly!");
            $("#losses").text("You answered: " + lose + " questions incorrectly!");

            $("#comment").text("Would you like to play again?");
            $("#comment").on("click", function () {
                i = 0;
                win = 0;
                lose = 0;
            })

        }
    }
};