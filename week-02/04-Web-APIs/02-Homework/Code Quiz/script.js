//CODE QUIZ

// user opens page and sees a start button
    // style a start button
    // add a timer
        // use intervals
// user clicks start button and sees Q & 4A
    // add event listener for button click
    // build Q field
        // header or p tag
        // answers will be button
// build 4 buttons and add event listeners
// user clicks answer and is told C / I
        // lose points/time if I
        // if/else statement
// gain points if correct
// if/else
// User gets next question
    // move to next Q
        // how to store questions so easily iterable
// User finishes with a score
    // Make a score chart
        // score == time left
        // make variable to hold score
// User can save score
    // add initials field
        //save to local storage

// build high score page
// how to store Q efficiently

var questions = [];
//var landingButton = prompt("Let's play a game!");
var btns = ("btn0", "btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9", "btn10", "btn11", "btn12", "btn13", "btn14", "btn15", "btn16", "btn17", "btn18", "btn19", "btn20");

function removestartButton() {
    var elem = document.getElementById('startButton');
    elem.parentNode.removeChild(elem);
    return false;
}

function deleteAll() {
    var elem =  document.getElementsByClassName('button');
    elem.parentNode.removeChild(elem);
}

function startBtnFunction() {
    removestartButton();
    var e = document.getElementById("landingPage");
    e.innerHTML = "What's your favorite weed?";
    
    let btn0 = document.createElement("button");
    btn0.innerHTML = "Grand Daddy Purple";
    document.body.appendChild(btn0).onclick = function() {HideError(btns)};

    let btn1 = document.createElement("button");
    btn1.innerHTML = "OG Kush";
    document.body.appendChild(btn1);

    let btn2 = document.createElement("button");
    btn2.innerHTML = "Sour Diesel";
    document.body.appendChild(btn2);

    let btn3 = document.createElement("button");
    btn3.innerHTML = "Maui Wowie";
    document.body.appendChild(btn3);

    console.clear();


    let btns = document.querySelectorAll('button') ;
    
    btns.forEach(function (i) {
      i.addEventListener('click', function() {questionTwo();
      });
    });
}

    
    //document.addEventListener("click", questionTwo());
    //[btn0, btn1, btn2, btn3].forEach(function() {
        //element.addEventListener(questionTwo)


function questionTwo() {
    var e = document.getElementById("landingPage");
    e.innerHTML = "What's your favorite bong?";
    

    let btn0 = document.createElement("button");
    btn0.innerHTML = "Glass";
    document.body.appendChild("Glass", btn0);
  
    let btn1 = document.createElement("button");
    btn1.innerHTML = "Apple";
    document.body.appendChild(btn1);

    let btn2 = document.createElement("button");
    btn2.innerHTML = "Soda Can";
    document.body.appendChild(btn2);

    let btn3 = document.createElement("button");
    btn3.innerHTML = "5 gallon water jug";
    document.body.appendChild(btn3);

    console.clear();

    let btns = document.querySelectorAll('button') ;
    
    btns.forEach(function (i) {
      i.addEventListener('click', function() { questionThree
      ();
      });
    });
}


function questionThree() {
    var e = document.getElementById("landingPage");
    e.innerHTML = "What is the most popular variant?";


    let btn4 = document.createElement("button");
    btn0.innerHTML = "Sativa";
    document.body.replaceChild(btn4);
  
    let btn5 = document.createElement("button");
    btn1.innerHTML = "Indica";
    document.body.appendChild(btn5);

    let btn6 = document.createElement("button");
    btn2.innerHTML = "Ruderalis";
    document.body.appendChild(btn6);

    let btn7 = document.createElement("button");
    btn3.innerHTML = "There isn't one!";
    document.body.appendChild(btn7);

    console.clear();

    let btns = document.querySelectorAll('button') ;
    
    btns.forEach(function (i) {
      i.addEventListener('click', function() { questionFour();
      });
    });
}
//TABLE
    //X-AXIS
        //QUESTIONS
            //STRINGS
    //Y-AXIS
        //ANSWERS
            //BOOLEAN

//            questions[0].answers[1].correct == true
//var questions = [{
//    question: "what is a rose that goes by any other name",
//    answers: [
//        // google data attributes
//        { a: "answer1", correct: true },
//        { a: "answer2", correct: false },
//        { a: "answer3", correct: false },
//        { a: "answer4", correct: false }
//    ]
//}, {
//    question: "what is a duck that goes by any other name",
//    answers: [
//        // google data attributes
//        { a: "answer1", correct: true },
//        { a: "answer2", correct: false },
//        { a: "answer3", correct: false },
//        { a: "answer4", correct: false }
//    ]
//}, {
//    question: "what is a bro that goes by any other name",
//    answers: [
//        // google data attributes
//        { a: "answer1", correct: false },
//        { a: "answer2", correct: true },
//        { a: "answer3", correct: false },
//        { a: "answer4", correct: false }
//    ]
//}, {
//    question: "what is a fishtick that goes by any other name",
//    answers: [
//        // google data attributes
//        { a: "answer1", correct: true },
//        { a: "answer2", correct: false },
//        { a: "answer3", correct: false },
//        { a: "answer4", correct: false }
//    ]



var sportQuestions = [
    {
        question: "What city does the MLB team 'Athletics' play in?\n(a) Los Angeles\n(b) Oakland\n(c) Detroit\n(d) Denver", answer: "c"},
    {
        question: "What city does the NFL team 'Bengals' play in?\n(a) San Francisco\n(b) Atlanta\n(c) Cincinatti\n(d) Baltimore"},
    {
        question: "Which NBA team has won the most championships?\n(a) "},
]
