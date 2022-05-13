
var userTrue = $("#btnTrue");
var userFalse= $("#btnFalse")
var userScore = $("#userScore");
var startBtn = confirm("Would you like to take the quiz?");
// var questionMain =
var gameTimer = $("#gameTimer");
var secondsLeft = 30;
var btnTrue = $("#btnTrue")
var btnFalse = $("#btnFalse")
var quizQuestionIndex = [0]
var questionsMain = $("#questionsMain");

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft
if(secondsLeft === -1) {
      clearInterval(timerInterval);
      alert("You are Out of Time!");
    }

},1000);};

setTime()

var quizQuestions = [
"Is Mt Elbert is the Highest Peak in Colorado?",
"Is the Lark Bunting the State Bird of Colorado?",
 "Does Colorado have Grizzly Bears?",
 "Is the State Flower of Colorado the Columbine?",
 "Is the Mascot of the University of Colorado the Rams?",
];

function gameFlow() {

for (var i = 0; i < quizQuestions.length; i++) { 
    questionsMain.text(quizQuestions[0]);
    ;
};
btnTrue.on('click', function () {
  questionsMain.text(quizQuestions[1]);
});
btnFalse.on('click', function () {
  questionsMain.text(quizQuestions[2]);
});
}
   
gameFlow();




