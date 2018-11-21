$(document).ready(function () {

    var questionsAndAnswers = [{
        question: "15 x 3",
        correctAnswer: "45",
        selections: ["50", "47", "45", "65"],

    },
    {
        question: "96 + 137",
        correctAnswer: "233",
        selections: ["233", "213", "242", "229"],
    },
    {
        question: "450 / 9",
        correctAnswer: "50",
        selections: ["45", "50", "40", "55"],
    },
    {
        question: "81-52",
        correctAnswer: "29",
        selections: ["33", "27", "41", "29"],
    },
    {
        question: "18 * 5",
        correctAnswer: "90",
        selections: ["95", "90", "85", "100"],
    }]

    var count = 0;
    var correct = 555;
    var incorrect = 888;
    var input = [];
    var number = 10;
    var intervalId;

    $("#submit").hide();
    $("#timer").hide();

    $("#buttons").on("click", "#initialize", function () {
        ready();
        initialize();
    });

    $("#buttons").on("click", "#submit", function () {
        ready();
        if (count == 5) {
            ready();
            $("#submit").hide();
            $("#initialize").show();
            $("#initialize").text("Start Over");
            endGame();
            count = 0;
        } else {
            submit();
        }
    });

    function ready() {
        $("#questions").empty();
        $("#answers").empty();
        $("#scoreboard").empty();
        $("#timer").show();
        run();
    }

    function initialize() {
        ready();
        $("#announcements").hide();
        $("#questions").append("<p>" + questionsAndAnswers[count].question);
        for (let i = 0; i < questionsAndAnswers[count].selections.length; i++) {
            $("#answers").prepend("<input type='radio' name='radioButtons'>" + questionsAndAnswers[count].selections[i] + "<br>");
        }
        $("input:radio").click(function () {
            $("input:radio").not(this).prop("checked", false);
        });
        $("#initialize").hide();
        $("#submit").show();
        count++;
    }

    function submit() {
        ready();
        if (number === 0 && count === 5) {
            endGame();
        } else {
            $("#questions").append("<p>" + questionsAndAnswers[count].question);
            for (let i = 0; i < questionsAndAnswers[count].selections.length; i++) {
                $("#answers").prepend("<input type='radio'>" + questionsAndAnswers[count].selections[i] + "<br>");
            }
            $("input:radio").click(function () {
                $("input:radio").not(this).prop("checked", false);
            });
            count++;
            run();

        }
    }

    function endGame() {
        $("#scoreboard").append("<h1> Wins: </h1>" + correct + "<br>");
        $("#scoreboard").append("<h1> Losses: </h1>" + incorrect + "<br>");
        $("#scoreboard").append("<p>Try Again!");
        stop();
        $("#timer").hide();
    }

    function run() {
        clearInterval(intervalId);
        number = 10;
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        number--;
        $("#timer").html("<h2>:0" + number + "</h2>");
        if (number === 0) {
            stop();
            submit();
        }
    }

    function stop() {
        clearInterval(intervalId);
        number = 10;
    }
});