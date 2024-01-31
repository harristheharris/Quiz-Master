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

  const questionElement = document.getElementById("question");
  const answerButton = document.getElementById("answer");
  var content = document.getElementById("content");

  //we go grab a question object
  var qAnda = questGrabber();

  //and pick it apart :>
  console.log(qAnda);
  console.log(qAnda[0].questions);
  console.log(qAnda[0].questions.answers);

  var displayQanda = showQuestions(qAnda);

  function showQuestions(qAnda) {

    var askQuestions = qAnda[0].questions.question;
    var giveAnswers = qAnda[0].questions.answers;

    console.log(giveAnswers);
    document.getElementById("content").innerHTML = askQuestions;

   /* answerGrabber(giveAnswers);

     function answerGrabber(grabby) {
      var grabAnswers = grabby
      const questIndex = grabAnswers.indexOf(getRandom(grabAnswers));
      console.log(questIndex);
      const plchldr = grabAnswers.splice(questIndex, 1);

      return plchldr;
    }  */

    document.getElementById("option1").innerHTML = giveAnswers[0].answerA.A;
    console.log(giveAnswers[0].answerA.A);
    document.getElementById("option2").innerHTML = giveAnswers[0].answerB.B;
    console.log(giveAnswers[0].answerB.B);
    document.getElementById("option3").innerHTML = giveAnswers[0].answerC.C;
    console.log(giveAnswers[0].answerC.C);
    document.getElementById("option4").innerHTML = giveAnswers[0].answerD.D;
    console.log(giveAnswers[0].answerD.D);


    // content.textContent = giveAnswers;

    console.log("We are in the showQuestions functions V V V V ");
    console.log(qAnda);
    console.log(askQuestions);
    console.log(giveAnswers);



    return giveAnswers;
  };

  console.log(displayQanda);





};

//try catch for iteration termination






function questGrabber() {
  var grabQuestions = data.quizQuestions;

  //WE are grabbing the the index of the object that is chosen and pulling out of the array. the only thing i don't get is how the array isn't updated back to the OG once we leave the functions and comes back
  //this will come important when we try to figure out how each queston is displayed without repeats

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