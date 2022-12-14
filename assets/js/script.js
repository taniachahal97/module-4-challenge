var timerEl = document.getElementById('countdown');
var message = document.getElementById('Instructions')
var startButton = document.getElementById('start-btn')
var timeLeft;
var score = 0; 
var playerName = localStorage.getItem('name');
var Score = localStorage.getItem('score');
var finished;


//disappear the question 1 from the page 
document.getElementById("question-1").style.display = "none";

//disappear question 2 from the page 

document.getElementById("question-2").style.display = "none";

//disappear question 3 from the page 

document.getElementById("question-3").style.display = "none";

//disappear question 4 from the page 

document.getElementById("question-4").style.display = "none";

//disappear question 5 from the page 

document.getElementById("question-5").style.display = "none";


//disappear the text area and submit button from the page

document.getElementById("first-name").style.display = "none";

//disappear the submit button from the page

document.getElementById("submit-button").style.display = "none";

//disappear the go-back button from the page

document.getElementById("go-back").style.display = "none";

//disappear the clear button from the page

document.getElementById("clear").style.display = "none";

//disappear the highscores heading from the page 
document.getElementById("highscores-heading").style.display = "none";

//Set timer for the Quiz 
function countdown() {

    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      //
      // YOUR CODE HERE
      //
      timeLeft--;
      timerEl.textContent = "Time: " + timeLeft;

      if (timeLeft >= 0) {
        // Tests if win condition is met
        if (finished && timeLeft > 0) {
          // Clears interval and stops timer
          clearInterval(timeInterval);
          saveScore();
        }
      }


      if(timeLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timeInterval);
        // Calls saveScore function for player to enter their iinitials and score 
        saveScore();
    }
  },1000);


  // subtracting 3 seconds from the timer for every wrong option selected for question 1 
  document.getElementById("btn-1").addEventListener('click', function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  document.getElementById("btn-2").addEventListener('click', function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  document.getElementById("btn-4").addEventListener('click', function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  // subtracting 3 seconds from the timer for every wrong option selected for question 2


  document.getElementById("q2-btn-1").addEventListener('click',function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  document.getElementById("q2-btn-2").addEventListener('click',function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  document.getElementById("q2-btn-4").addEventListener('click',function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  //subtracting 3 seconds from the timer for every wrong option selected for question 3

  document.getElementById("q3-btn-1").addEventListener('click',function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  document.getElementById("q3-btn-2").addEventListener('click',function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  document.getElementById("q3-btn-3").addEventListener('click',function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  //subtracting 3 seconds from the timer for every wrong option selected for question 4

  document.getElementById("q4-btn-1").addEventListener('click',function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  document.getElementById("q4-btn-3").addEventListener('click',function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  document.getElementById("q4-btn-4").addEventListener('click',function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  document.getElementById("q4-btn-5").addEventListener('click',function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  //subtracting 3 seconds from the timer for every wrong option selected for question 5

  document.getElementById("q5-btn-1").addEventListener('click',function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  document.getElementById("q5-btn-2").addEventListener('click',function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  document.getElementById("q5-btn-3").addEventListener('click',function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

}

  
  // adding event listener to start button

  startButton.addEventListener("click", function(){
    timeLeft = 90;
    finished = false;

    //disappear the start button from the screen once it is clicked
    
    document.getElementById("first-name").value = " ";

    startButton.style.display = 'none';

    //disappear instructions from the page
    document.getElementById("Instructions").style.display = "none";

    //disappear Quiz challenge heading from the page
    document.getElementById("opening-heading").style.display = "none";

    // starts the timer when button is clicked 
    countdown();

    //display the first question with button options 
    document.getElementById("question-1").style.display = "block";

    var buttons = document.getElementById("question-1-options");
    var result = document.getElementById("result-1")

    buttons.addEventListener('click', function(event){
        console.log(event.target.dataset.message);

        if(event.target.dataset.message == 'option3'){
            result.textContent = 'correct!!';
            score = score + 5;
            console.log(score);
            
        }

        else
        {
            //does not display before the secondQuestion() is called 
            result.textContent = 'Wrong!!';
            
        }  
        
        secondQuestion();
       
    }) 

        
})

    
function secondQuestion(){

   
    //console.log("Hello")

    //display the second question with the button options
    document.getElementById("question-1").style.display = "none";
    document.getElementById("question-2").style.display = "block";
    

    var buttons = document.getElementById("question-2-options");
    var result = document.getElementById("result-2");

    buttons.addEventListener('click', function(event){
        console.log(event.target.dataset.message);
        if(event.target.dataset.message == 'q2-option3'){
            result.textContent = 'correct!!';
            score = score + 5;
            console.log(score);
        }
        else
        {
            result.textContent = 'Wrong!!'
        }  

        thirdQuestion();

})
}

function thirdQuestion(){

    //console.log("Hello")

    
     // disappear the outcome of the first question before the third question is displayed 
    document.getElementById("result-1").style.display = "none";

    //display the third question with the button options
    document.getElementById("question-2").style.display = "none";
    document.getElementById("question-3").style.display = "block";
   

    var buttons = document.getElementById("question-3-options");
    var result = document.getElementById("result-3");

    buttons.addEventListener('click', function(event){
        console.log(event.target.dataset.message);
        if(event.target.dataset.message == 'q3-option4'){
            result.textContent = 'correct!!';
            score = score + 5;
            
        }
        else
        {
            result.textContent = 'Wrong!!'
        }  

        fourthQuestion();

})
}


function fourthQuestion(){

    //console.log("Hello")

    // disappear the outcome of the second question before the third question is displayed 
    document.getElementById("result-2").style.display = "none";

    //display the second question with the button options
    document.getElementById("question-3").style.display = "none";
    document.getElementById("question-4").style.display = "block";

    var buttons = document.getElementById("question-4-options");
    var result = document.getElementById("result-4");

    buttons.addEventListener('click', function(event){
        console.log(event.target.dataset.message);
        if(event.target.dataset.message == 'q4-option2'){
            result.textContent = 'correct!!';
            score = score + 5;
            
        }
        else
        {
            result.textContent = 'Wrong!!'
        }  

        finalQuestion();

})
}


function finalQuestion(){

    //console.log("Hello")

    // disappear the outcome of the third question before the third question is displayed 
    document.getElementById("result-3").style.display = "none";

    //display the second question with the button options
    document.getElementById("question-4").style.display = "none";
    document.getElementById("question-5").style.display = "block";

    var buttons = document.getElementById("question-5-options");
    var result = document.getElementById("result-5");

    buttons.addEventListener('click', function(event){
        console.log(event.target.dataset.message);
        if(event.target.dataset.message == 'q5-option4'){
            result.textContent = 'correct!!';
            score = score + 5;
        
        }
        else
        {
            result.textContent = 'Wrong!!'
        }  
    
    // disappear the outcome of the fourth question before the third question is displayed 
    document.getElementById("result-4").style.display = "none";
    finished = true;
    saveScore();

})
}

function saveScore(){

    // disappear all questions from the page
    document.getElementById("question-1").style.display = "none";
    document.getElementById("question-2").style.display = "none";
    document.getElementById("question-3").style.display = "none";
    document.getElementById("question-4").style.display = "none";
    document.getElementById("question-5").style.display = "none";

    // disappear results of first 4 questions from the page 
    document.getElementById("result-1").style.display = "none";
    document.getElementById("result-2").style.display = "none";
    document.getElementById("result-3").style.display = "none";
    document.getElementById("result-4").style.display = "none";

    //display the final score 
    var finalScore = document.getElementById("score");
    finalScore.value = score;
    finalScore.textContent = "Your final score is " + finalScore.value;

    //display textbox and submit button 

    document.getElementById("first-name").style.display = "block";
    document.getElementById("submit-button").style.display = "block";

    // add event listener to save button

    var saveButton = document.getElementById("submit-button");
    var firstNameInput = document.getElementById("first-name");

    saveButton.addEventListener('click',function(){
        var firstName = firstNameInput.value;
        localStorage.setItem('name',firstName);

        var playerScore = finalScore.value;
        localStorage.setItem('score',playerScore);

        var info = document.getElementById("player-info");
        info.textContent = firstNameInput.value + " " + finalScore.value;

        //get items out of local storage 

        //playerName = localStorage.getItem('name');
        //Score = localStorage.getItem('score');

        saveInfo();
    })

    

   

}

function saveInfo(){

    
    // disappear the outcome of the fifth question result
    document.getElementById("result-5").style.display = "none";

    //disappear the score message from the page 

    document.getElementById("score").style.display = "none";

     // disappear the submit button from the page
     document.getElementById("submit-button").style.display = "none";

      // disappear the fifth question from the page
    document.getElementById("first-name").style.display = "none";

    //display player name and score for the game 

    //var info = document.getElementById("player-info");
    //info.textContent = playerName + " " + Score;

    // display highcores heading 

    document.getElementById("highscores-heading").style.display = "block";

    //display go-back button

    document.getElementById("go-back").style.display = "block";

    //display clear-high score button

    document.getElementById("clear").style.display = "block";

    // disappear the view highscores button from the page 

    document.getElementById("view-highscores").style.display = "none";


}

// function to display player information when view high-score button is displayed

var highScoreBtn = document.getElementById("view-highscores");

highScoreBtn.addEventListener('click', event => {

    //disappear start button from the page 

    document.getElementById("start-btn").style.display = "none";
    document.getElementById("Instructions").style.display = "none";

    //disappear Quiz challenge heading from the page
    document.getElementById("opening-heading").style.display = "none";

    //disappear the highscore button from the screen once it is clicked

    highScoreBtn.style.display = 'none';

    saveInfo();
    var newName = document.getElementById("first-name");
    var newScore = document.getElementById("score")

    
    var info = document.getElementById("saved-player-info");
    info.textContent = newName.value + " " + newScore.value;

    console.log("Heeloo");
})


// function to program go-back button 

var goBackBtn = document.getElementById("go-back");

goBackBtn.addEventListener('click', function(){

    // display these elements on the page
    document.getElementById("start-btn").style.display = "block";
    document.getElementById("Instructions").style.display = "block";
    document.getElementById("view-highscores").style.display = "block";
    //disappear Quiz challenge heading from the page
    document.getElementById("opening-heading").style.display = "block";

    //disappear the go back button and the clear high score button from the page 

    document.getElementById("go-back").style.display = "none";
    document.getElementById("clear").style.display = "none";

    // disappear the highscores heading from the page

    document.getElementById("highscores-heading").style.display = "none";

    //disappear the player name and score from the page 

    document.getElementById("player-info").style.display = "none";
    //document.getElementById("saved-player-info").style.display = "none";


} )

// function to program clear highcores button
var clearBtn = document.getElementById("clear");

clearBtn.addEventListener('click', function(){


    document.getElementById("player-info").style.display = "none";
    document.getElementById("saved-player-info").style.display = "none";
})








    

    


  