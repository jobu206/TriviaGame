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
var correctAnswer = 0;

// wrongAnswers
var wrongAnswer = 0;

// noAnswers
var noAnswer = 0;

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
$(".startButton").on("click", function () {
    // this keyword pertains to the start game function since that's what's called this method.
    $(this).hide();
    // display initial countdown (intervalId)
    $("#timer").html("<h4>30 seconds left</h4>")

    // start timer countdown
    start();

    // Now we're displaying the questions
    // question #1
    $("#questions").append("<li>" + qArr[0].question + "</li>");
    console.log('hi');
    
    // answers for Q1
    $('#q1answer').append('<p>hello world</p>');
    // $("#q1answer").html("<input type='radio' id='defaultInline1' name='question1'>" + "<label for='defaultInline1'>" + qArr[0].answers[0] + "</label>");
    console.log('sup');
    
    // $(".custom-control .custom-radio .custom-control-inline .answers").html("<input type='radio' class='custom-control-input' id='defaultInline1' name='question1'>" + "<label class='custom-control-label' for='defaultInline1'>" + qArr[0].answers[1] + "</label>")
    // $(".custom-control .custom-radio .custom-control-inline .answers").html("<input type='radio' class='custom-control-input' id='defaultInline1' name='question1'>" + "<label class='custom-control-label' for='defaultInline1'>" + qArr[0].answers[2] + "</label>")
    // $(".custom-control .custom-radio .custom-control-inline .answers").html("<input type='radio' class='custom-control-input' id='defaultInline1' name='question1'>" + "<label class='custom-control-label' for='defaultInline1'>" + qArr[0].answers[3] + "</label>")

    // // question #2
    $("#questions").append("<li>" + qArr[1].question + "</li>");
    console.log('hey');
    // // answers for Q2
    // $(".answers").append("<input type='radio' class='custom-control-input' id='q2a1' name='question2'>" + "<label class='custom-control-label' for='q2a1'>" + qArr[1].answers[0] + "</label>")
    // $(".answers").html("<input type='radio' class='custom-control-input' id='q2a2' name='question2'>" + "<label class='custom-control-label' for='q2a2'>" + qArr[1].answers[1] + "</label>")
    // $(".answers").html("<input type='radio' class='custom-control-input' id='q2a3' name='question2'>" + "<label class='custom-control-label' for='q2a3'>" + qArr[1].answers[2] + "</label>")
    // $(".answers").html("<input type='radio' class='custom-control-input' id='q2a4' name='question2'>" + "<label class='custom-control-label' for='q2a4'>" + qArr[1].answers[3] + "</label>")

    // // question #3
    $("#questions").append("<li class='quizQs'>" + qArr[2].question + "</li>");
    // // answers for Q3
    // $(".answers").append("<input type='radio' class='custom-control-input' id='q3a1' name='question3'>" + "<label class='custom-control-label' for='q3a1'>" + qArr[2].answers[0] + "</label>")
    // $(".answers").html("<input type='radio' class='custom-control-input' id='q3a2' name='question3'>" + "<label class='custom-control-label' for='q3a2'>" + qArr[2].answers[1] + "</label>")
    // $(".answers").html("<input type='radio' class='custom-control-input' id='q3a3' name='question3'>" + "<label class='custom-control-label' for='q3a3'>" + qArr[2].answers[2] + "</label>")
    // $(".answers").html("<input type='radio' class='custom-control-input' id='q3a4' name='question3'>" + "<label class='custom-control-label' for='q3a4'>" + qArr[2].answers[3] + "</label>")

    // // question #4
    $("#questions").append("<li class='quizQs'>" + qArr[3].question + "</li>");
    // // answers for Q4
    // $(".answers").html("<input type='radio' class='custom-control-input' id='q4a1' name='question4'>" + "<label class='custom-control-label' for='q4a1'>" + qArr[3].answers[0] + "</label>") + 
    // $(".answers").html("<input type='radio' class='custom-control-input' id='q4a2' name='question4'>" + "<label class='custom-control-label' for='q4a2'>" + qArr[3].answers[1] + "</label>") + 
    // $(".answers").html("<input type='radio' class='custom-control-input' id='q4a3' name='question4'>" + "<label class='custom-control-label' for='q4a3'>" + qArr[3].answers[2] + "</label>") + 
    // $(".answers").html("<input type='radio' class='custom-control-input' id='q4a4' name='question4'>" + "<label class='custom-control-label' for='q4a4'>" + qArr[3].answers[3] + "</label>")
});


    // answers to questions

    // submit answers
    $("#submit").html('<input class="btn btn-primary" type="submit" value="Submit">');

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
    $("#timer").html("<h4>" + counter + " seconds left</h4>");

    if (counter === 0) {
        // stop time
        stop();
        // set score
        score();
        // display final tally
        finalResults();
    }
}

// function to stop time running
function stop() {
    clearInterval(intervalId);
}

function finalResults() {
    $('#time').hide();
    

    
}

// keeping score
function score() {
    var userAnswer1 = $("input[name='q1a2']:checked").val();
    var userAnswer2 = $("input[name='q2a3']:checked").val();
    var userAnswer3 = $("input[name='q3a2']:checked").val();
    var userAnswer4 = $("input[name='q4a2']:checked").val();

    // Q1 check
    if (userAnswer1 === undefined) {
        noAnswer++;
    } else if (userAnswer1 === qArr[0].answers) {
        correctAnswer++;
    } else {
        wrongAnswer++;
    }

    // Q2 check
    if (userAnswer2 === undefined) {
        noAnswer++;
    } else if (userAnswer2 === qArr[1].answers) {
        correctAnswer++;
    } else {
        wrongAnswer++;
    }

    // Q3 check
    if (userAnswer3 === undefined) {
        noAnswer++;
    } else if (userAnswer3 === qArr[2].answers) {
        correctAnswer++;
    } else {
        wrongAnswer++;
    }

    // Q4 check
    if (userAnswer4 === undefined) {
        noAnswer++;
    } else if (userAnswer4 === qArr[3].answers) {
        correctAnswer++;
    } else {
        wrongAnswer++;
    }
}



});

/*
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
*/