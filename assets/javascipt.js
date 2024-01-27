//Global variables

/* const module = await import("./questions.json", let smplName = {}) */
/* fetch(/assets/questions.JSON); */

import data from './questions.json' assert {type: 'json'}; 
console.log(data);


var timer = document.querySelector("#timer");
var strtGme = document.querySelector("#strt-bttn");
var secondsLeft = 10;


//the function that runs once the start game button is pressed
function quizTime() {
  setTime();
};


//timer functions
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    

    secondsLeft--;
    timer.textContent = secondsLeft;
    console.log(secondsLeft);

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);

    }

  }, 1000);

}


strtGme.addEventListener("click", quizTime);