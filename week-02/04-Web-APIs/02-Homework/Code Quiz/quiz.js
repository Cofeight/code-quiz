function removestartButton() {
    var elem = document.getElementById('startButton');
    elem.parentNode.removeChild(elem);
    return false;
}

function deleteAll() {
    var elem =  document.getElementsByClassName('button');
    elem.parentNode.removeChild(elem);
}


let questions = [
    {
        question: "What city does the MLB team 'Athletics' play for?",
        choiceA: "Los Angeles",
        choiceB: "Oakland",
        choiceC: "Detroit",
        choiceD: "Denver",
        correct: "b"
    }, {
        question: "What city does the NFL Team 'Bengals' play for?",
        choiceA: "San Francisco",
        choiceB: "Atlanta",
        choiceC: "Cincinatti",
        choiceD: "Baltimore",
        correct: "c"
    }, {
        question: "Which NBA team has won the most championships?",
        choiceA: "Chicago Bulls",
        choiceB: "Boston Celtics",
        choiceC: "Minneapolis/Los Angeles Lakers",
        choiceD: "B & C",
        correct: "d"
    }, {
        question: "How many teams make up the NHL?",
        choiceA: "36",
        choiceB: "32",
        choiceC: "28",
        choiceD: "30",
        correct: "b"
    }, {
        question: "What city does the MLB team 'Athletics' play for?",
        choiceA: "Los Angeles",
        choiceB: "Oakland",
        choiceC: "Detroit",
        choiceD: "Denver",
        correct: "b"
    }

]
 