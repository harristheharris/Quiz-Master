//Global variables

/* const module = await import("./questions.json", let smplName = {}) */
/* fetch(/assets/questions.JSON); */

import data from './questions.json' assert {type: 'json'};
console.log(data);
console.log(data.quizQuestions[2]);

var timer = document.getElementById("timer");
var strtGme = document.getElementById("strt-bttn");
// var content = document.querySelector(".content");
var secondsLeft = 10;

//the function that runs once the start game button is pressed
function quizTime() {
  //setTime();

  const questionElement = document.getElementById("question");
  const answerButton = document.getElementById("answer");
  // var content = document.getElementById("content");


  //we go grab a question object
  var qAnda = questGrabber();

  //and pick it apart :>
  console.log(qAnda);
  console.log(qAnda[0].questions);
  console.log(qAnda[0].questions.answers);

  var displayQanda = showQuestions(qAnda);

  console.log(displayQanda);


};

//try catch for iteration termination

function showQuestions(qAnda) {

  var askQuestions = qAnda[0].questions.question;
  var giveAnswers = qAnda[0].questions.answers;

  console.log(giveAnswers);
  document.getElementById("content").innerHTML = askQuestions;
  document.getElementById("strt-bttn").innerHTML = "";
  /* answerGrabber(giveAnswers);
 
    function answerGrabber(grabby) {
     var grabAnswers = grabby
     const questIndex = grabAnswers.indexOf(getRandom(grabAnswers));
     console.log(questIndex);
     const plchldr = grabAnswers.splice(questIndex, 1);
 
     return plchldr;
   }  */
  console.log(giveAnswers[0][0]);

  let answerOne = giveAnswers[0].answerA.A;
  let answerOneTruth = giveAnswers[0].answerA.truthValue;
  document.getElementById("option1").innerHTML = giveAnswers[0].answerA.A;
  console.log(giveAnswers[0].answerA.A);
  console.log(answerOne + " This is the variable  .log");
  console.log(answerOneTruth);

  
  let answerTwo = giveAnswers[0].answerB.B;
  let answerTwoTruth = giveAnswers[0].answerB.truthValue;
  document.getElementById("option2").innerHTML = giveAnswers[0].answerB.B;
  console.log(giveAnswers[0].answerB.B);
  console.log(answerTwo + " this is the variable .log");
  console.log(answerTwoTruth);

  let answerThree = giveAnswers[0].answerC.C;
  let answerThreeTruth = giveAnswers[0].answerC.truthValue;
  document.getElementById("option3").innerHTML = giveAnswers[0].answerC.C;
  console.log(giveAnswers[0].answerC.C);
  console.log(answerThree + " this is the variable .log");
  console.log(answerThreeTruth);

  let answerFour = giveAnswers[0].answerD.D;
  let answerFourTruth = giveAnswers[0].answerD.truthValue;
  document.getElementById("option4").innerHTML = giveAnswers[0].answerD.D;
  console.log(giveAnswers[0].answerD.D);
  console.log(answerFour + " this is the variable .log");
  console.log(answerFourTruth);




  // content.textContent = giveAnswers;

  console.log("We are in the showQuestions functions V V V V ");
  console.log(qAnda);
  console.log(askQuestions);
  console.log(giveAnswers);



  var option = document.getElementById("option1");
  var option2 = document.getElementById("option2");
  var option3 = document.getElementById("option3");
  var option4 = document.getElementById("option4");
  console.log(option4);




  option.addEventListener("click", kidKool);
  option2.addEventListener("click", kidKool);
  option3.addEventListener("click", kidKool);
  option4.addEventListener("click", kidKool);



  //We had to bring him out


  function kidKool(event) {
    var clickedAnswer = event.currentTarget;
    console.log(clickedAnswer);
    console.log("This is kidkool Motherbase! And we're out of the woods! Do you copy MB!? Do you copy!? ");
   
      if (giveAnswers == true) {

        var value = "right";
        console.log(value);
      }

      else {
        var value = "wrong";
        console.log(value);
      }
      console.log("We hear ya kid, loud and clear, and ya better hop to it quick, cause there's boogies on ya tail!");
    
    return value;
  } //end of kidKool function

  return giveAnswers;
};




function questGrabber() {
  var grabQuestions = data.quizQuestions;

  //WE are grabbing the the index of the object that is chosen and pulling out of the array. the only thing i don't get is how the array isn't updated back to the OG once we leave the functions and comes back
  //this will come important when we try to figure out how each queston is displayed without repeats

  const questIndex = grabQuestions.indexOf(getRandom(grabQuestions));
  // console.log(questIndex);
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