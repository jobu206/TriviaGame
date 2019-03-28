/*
-------------------------------------------------------------------------
   PSEUDO CODE
-------------------------------------------------------------------------
   1. Click start button
        -> Q's are hidden until user clicks start button.
            -> Have button inserted via jQuery and append to jumbotron.
   2. All Qs appear and timer starts
        -> Start button is hidden
   3. User guesses answer to 4 multi choice questions
       -> User cannot guess more than 1 answer per question
           -> In this case use radio buttons
                -> Need to figure out how to capture answer in variable.
   4. User submits answers
        -> If time is left, user is allowed to go ahead and
          submit answers.
            -> If time is not left, any unaswered Qs marked incorrect
        -> Answers are tallied with the number correct and number wrong.

-------------------------------------------------------------------------
    Qs for baseball trivia
-------------------------------------------------------------------------
- Who holds the single season record for the highest batting average?
    - Jose Canseco
    - Ty Cobb
    - Hugh Duffy*
        - Hugh batted a record .440 in 1894.
    - Fred Dunlap
- Who holds the record for the fastest pitch in Baseball History?
    - Aroldis Chapman
        -  Pitched a whoppihg 105.1 MPH on September 24, 2010
    - Nolan Ryan
    - Dennis Eckersley
    - Tim Wakefield
- Who holds the record for throwing the most No Hitters in their carrer?
    - Nolan Ryan*
        - Nolan Ryan holds the career record with 6 No-nos.
    - Aroldis Chapman
    - Sandy Koufax
    - Jason Varitek
- How many bases did Rickey Henderson steal in his illustrious career?
    - 1376
    - 1406*
        - Previous record holder was Lou Brock
    - 1275
    - 1402

*/

$(document).ready(function() {

/* VARIABLES */
// variable to hold intervalID to display on screen
var counter = 30;

// intervalId
var intervalId;

// correctAnswers
var correctAnswers = 0;

// wrongAnswers
var wrongAnswers = 0;

// noAnswers
var noAnswers = 0;

// questionsArray
var qArr = [{
    question: "Who holds the single season record for the highest batting average?",
    answers: ["Ty Cobb", "Jose Canseco", "Hugh Duffy", "Fred Dunlap"],
    correctAnswer: 2
},{
    question: "Who holds the record for the fastest pitch in Baseball History?",
    answers: ["Pedro Martinez", "Nolan Ryan", "Aroldis Chapman", "Randy Johnson"],
    correctAnswer: 3
},{
    question: "Who holds the record for throwing the most No Hitters in their career?",
    answers: ["Greg Maddux", "Felix Hernandez", "Roger Clemens", "Nolan Ryan"],
    correctAnswer: 4
},{
    question: "Who is the only teenager to homer on Opening Day?",
    answers: ["Alex Rodriguez","Robin Yount","Gary Carter","Keith Hernandez"],
    correctAnswer: 2
}] 

// start game on click
$("#start").on("click", function () {
    // this keyword pertains to the start game function since that's what's called this method.
    $(this).hide();
    // display initial countdown (intervalId)
    $("#timer").html("<h4>30 Seconds Left</h4>")

    // start timer countdown
    start();

    // Now we're displaying the questions
    // question #1
    $("#questions").html("<li class='quizQs'>" + question[0] + "</li>");
    // answers for Q1
    $(".custom-control .custom-radio .custom-control-inline .answers").html("<input type='radio' class='custom-control-input' id='defaultInline1' name='question1'>" + "<label class='custom-control-label' for='defaultInline1'>" + answers[0] + "</label>")
    $(".custom-control .custom-radio .custom-control-inline .answers").html("<input type='radio' class='custom-control-input' id='defaultInline1' name='question1'>" + "<label class='custom-control-label' for='defaultInline1'>" + answers[1] + "</label>")
    $(".custom-control .custom-radio .custom-control-inline .answers").html("<input type='radio' class='custom-control-input' id='defaultInline1' name='question1'>" + "<label class='custom-control-label' for='defaultInline1'>" + answers[2] + "</label>")
    $(".custom-control .custom-radio .custom-control-inline .answers").html("<input type='radio' class='custom-control-input' id='defaultInline1' name='question1'>" + "<label class='custom-control-label' for='defaultInline1'>" + answers[3] + "</label>")

    // question #2
    $("#questions").html("<li class='quizQs'>" + question[1] + "</li>");
    // answers for Q2
    $(".custom-control .custom-radio .custom-control-inline .answers").html("<input type='radio' class='custom-control-input' id='defaultInline1' name='question1'>" + "<label class='custom-control-label' for='defaultInline1'>" + answers[0] + "</label>")
    $(".custom-control .custom-radio .custom-control-inline .answers").html("<input type='radio' class='custom-control-input' id='defaultInline1' name='question1'>" + "<label class='custom-control-label' for='defaultInline1'>" + answers[1] + "</label>")
    $(".custom-control .custom-radio .custom-control-inline .answers").html("<input type='radio' class='custom-control-input' id='defaultInline1' name='question1'>" + "<label class='custom-control-label' for='defaultInline1'>" + answers[2] + "</label>")
    $(".custom-control .custom-radio .custom-control-inline .answers").html("<input type='radio' class='custom-control-input' id='defaultInline1' name='question1'>" + "<label class='custom-control-label' for='defaultInline1'>" + answers[3] + "</label>")  

})


    // answers to questions

    // submit answers

// set time interval function
function start() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

// function to decrement num container variable
function decrement(param) {
    // decrement counter;
    counter--;
    
    // score tallied and shown
    $("#timer").html(counter + "left");

    // stop time
    stop();

    // set score
    score();

    // display final tally
    finalResults();
}

// function to stop time running
function stop() {
    clearInterval(intervalId);
}

function finalResults() {
    
}




});