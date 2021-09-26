var startGame = document.querySelector("start-game")

var words = ["monkey", "goldfish", "oustrich", "walrus", "mosquito", "butterfly"];

var wordsRandom = words[Math.floor(Math.random() * words.length)];
    console.log(wordsRandom);

var lettersInWordsRandom = [];



for (i =0; i <words.random.textContent; i++) {
    lettersInWordsRandom.document.push(wordsRandom[i]);
}

function showBlank() {
    //we need to randomly pick word from words array
    var wordsRandom = words[Math.floor(Math.random() * words.length)];
    var wordsRandomLength = wordsRandom.split;
    var lettersInWordsRandom = [];
    
    for (i = 0; i <wordsRandom.length; i++) {
        lettersInWordsRandom.push(wordsRandom[i]);
    }
        console.log(lettersInWordsRandom);
    //convery blank letters into a string, and render on screen
    
}


function startPage() {
    var createStartButton = document.createElement("Button");
    startGame.textContent = "Start Game"
}

startGame.addEventListener("click", function () {
})

startPage()


words.addEventListener("keypress", getModifierState); {
 console.log(keyboardEvent);
}

keyboardEvent.words.addEventListener("keypress", getModifierState)





//As a user, I want to start the game by clicking on a button.
    //TODO: add a button on landing page to start the game
    //TODO: javascript code that pushes game content to the screen

//As a user, I want to try and guess a word by filling in a number of blanks that match the number of letters in that word.
    //TODO: create an array of words to guess from
    //TODO: select a random word from the array, and save it as a variable
    //TODO: number of letters to appear on the screen that represents a random word from the array

    //As a user, I want the game to be timed.
    //TODO: create a timer function that ticks down a from starting point
    //TODO: timer restarts from the beginning every time new game started (setTimeout)

//As a user, I want to win the game when I have guessed all the letters in the word.
    //TODO: use keyboardevent variable to compare to the letters in the word with if/else

//As a user, I want to lose the game when the timer runs out before I have guessed all the letters.
    //TODO: create an if when timer =0, new screen is launched indicating the user has lost
    //TODO: when all the letters have appeard on the screen, the timer stops and a "you win" page appears

//As a user, I want to see my total wins and losses on the screen.
    //TODO: create a counter that keeps track of total wins and losses every time the user ends a game; locally stored




//When a user presses a letter key, the user's guess should be captured as a key event.
    // create a keyboardevent and save to variable 

//When a user correctly guesses a letter, the corresponding blank "_" should be replaced by the letter. For example, if the user correctly selects "a", then "a _ _ a _" should appear.
    //
//When a user wins or loses a game, a message should appear and the timer should stop.
//
//When a user clicks the start button, the timer should reset.
//
//When a user refreshes or returns to the brower page, the win and loss counts should persist.