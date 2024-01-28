//Global variables

/* const module = await import("./questions.json", let smplName = {}) */
/* fetch(/assets/questions.JSON); */

import data from './questions.json' assert {type: 'json'};
console.log(data);
console.log(data.quizQuestions[2]);

var timer = document.querySelector("#timer");
var strtGme = document.querySelector("#strt-bttn");
var content = document.querySelector(".content");
var secondsLeft = 10;


//the function that runs once the start game button is pressed
function quizTime() {
  //setTime();

  var qAnda = questGrabber();

  console.log(qAnda);
  console.log(qAnda[0].questions);
  console.log(qAnda[0].questions.answers);

  var displayQanda = showQuestions(qAnda);

  function showQuestions(qAnda) {
    console.log("We are in the showQuestions functions V V V V ")
    console.log(qAnda);

  };






};








function questGrabber() {
  var grabQuestions = data.quizQuestions;


  const questIndex = grabQuestions.indexOf(getRandom(grabQuestions));
  console.log(questIndex);
  const plchldr = grabQuestions.splice(questIndex, 1);



  // var rndQuestion = getRandom(grabQuestions);
  // console.log(grabQuestions[0]);
  // console.log(rndQuestion);
  // console.log(getRandom(grabQuestions));

  return plchldr;
}


function getRandom(list1) {
  // var x = Math.floor((Math.random()*list1.length))
  var ranD = list1[Math.floor((Math.random() * list1.length))];
  /* var list1 = list1.splice(x ,1);
  console.log(list1); */
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