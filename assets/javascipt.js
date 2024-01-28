//Global variables

/* const module = await import("./questions.json", let smplName = {}) */
/* fetch(/assets/questions.JSON); */

import data from './questions.json' assert {type: 'json'}; 
console.log(data);
console.log(data.quizQuestions[0].question1);

var timer = document.querySelector("#timer");
var strtGme = document.querySelector("#strt-bttn");
var secondsLeft = 10;


//the function that runs once the start game button is pressed
function quizTime() {
  //setTime();

function questGrabber (){
  var grabQuestions = data.quizQuestions;
  var rndQuestion = getRandom(grabQuestions);

  // console.log(grabQuestions[0]);

  // console.log(rndQuestion);
  console.log(getRandom(grabQuestions));
  return rndQuestion;
}

questGrabber();


  
  



};

function getRandom (list1){
  var x = Math.floor((Math.random()*list1.length))
  var ranD = list1[x];
  var list1 = list1.splice[x , 10];
  // console.log(ranD);
  // console.log(" this is the getRandom function")
  return ranD;
}


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