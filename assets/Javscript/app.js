$(document).ready(function() {
    console.log("ready!")
 
var questions = [{
    question: "What did Cinderella lose at the ball?",
    choices: ["A monkey", "A pair of shorts", "Almond nut butter", "Her child-size slipper"],
    rightAnswer: 3
}, {
    question: "What do we wear on Wednesday's?",
    choices: ["Clothes", "Pink", "Birkenstocks", "Air Pods"],
    rightAnswer: 1
}, {
    question: "Finish the lyrics: 'I'm gonna take my horse to the old town road - '",
    choices: ["I'm gonna ride 'til I can't no more", "yolo", "all around me are familiar faces", "fuck the police, coming straight from the underground"],
    rightAnswer: 0
}, {
    question: "Who did Bill Clinton cheat on Hillary Clinton with?",
    choices: ["Cardi B", "Megan from Family Guy", "Monica Lewinsky", "UC Davis Cheerleaders"],
    rightAnswer: 2
}, {
    question: "What is the name of the Jonas Brothers' new song(the one that jumpstarted their comeback?",
    choices: ["S.O.S", "Lovebug", "Sucker", "Alone"],
    rightAnswer: 2
}, {
    question: "When is Picnic Day?",
    choices: ["April 13th", "June 1st", "February 31st", "December 32nd"],
    rightAnswer: 0
}, {
    question: "What is Miley Cyrus's father's name?",
    choices: ["Jim Carrey", "Jason Mamoa", "Iron Man", "Billy Ray Cyrus"],
    rightAnswer: 3
}, {
    question: "In Moana, what animal characater accompanies Moana on her journey to find Maui?",
    choices: ["Hei Hei, the rooster", "Pua the pig", "Dwayne the Rock"],
    rightAnswer: 0
}, {
    question: "Who is our Bootcamp instructor?",
    choices: ["Marie", "Shane", "Austin", "Sean"],
    rightAnswer: 1
}, {
    question: "Finish the lyrics: 'Hello Darkness, - '",
    choices: ["my friend", "it's Wednesday my dudes", "welcome to the year 3000", "my old friend"],
    rightAnswer: 3
}
];
});

var runGame = true;
var running=false
var intervalId;
var userPick="";
var questions = 0;
var notAnswered = 0;
var correctAnswer = 0;
var inCorrectAnswer = 0;
var images;
var index;
var counter = 20;

var runGame
console.log("game is running!");
if (runGame === true) {
    console.log("starting game!")
};

//start button should begin game
$("#start").on("click", function() {
    $("#start").hide();
    displayQuestions();
    runTimer();
    for (var i= 0; i < questions.length; i++);
})

//starting timer
function runTimer () {
    if (!running) {
        intervalId=setInterval(decrement,1000)
        running = true;
    }
}

//countdown
function decrement() {
    $("#timeleft").html("<p>Time left:" + counter + "</p");
    counter--;
    //stop timer if reach 0
    if (timer === 0) {
        notAnswered++;
        stop();
        $("#questionblock").html("<")
    }
}
//stops timer
function stop() {
    running = false;
    clearInterval(intervalId);
}

function displayQuestions() {
     Math.floor(Math.random()*questions.length);
     userPick = Option[index]
     $("#questionblock").html("<div>" + userPick + "</div>");
     for (var i = 0; i <userPick.length; i++) {
         var userInput = $("<div>");
         userInput.addClass("answerchoice");
         userInput.html(userPick[i]);
     }
}


//I didn't have enough time to actually finish this assignment. So this is what I have so far. I wanted it to generate random questions from the questions I listed in the variable "questions".
