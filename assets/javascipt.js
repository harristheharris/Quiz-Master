//Global variables

/* const module = await import("./questions.json", let smplName = {}) */
/* fetch(/assets/questions.JSON); */

import data from './questions.json' assert {type: 'json'};

console.log(data);
console.log(data.quizQuestions[2]);

let score = 0;
var timer = document.getElementById("timer");
var strtGme = document.getElementById("strt-bttn");
// var content = document.querySelector(".content");
var secondsLeft = 60;

//the function that runs once the start game button is pressed
function quizTime() {
  setTime();
  score = 0;

  console.log(score);
  const questionElement = document.getElementById("question");
  const answerButton = document.getElementById("answer");
  // var content = document.getElementById("content");

  document.getElementById("strt-bttn").innerHTML = "";//this is going to throw an error becuase when the program loops and tries to run this line again, there is no strt-bttn to speak of. We already got rid of it. Until I see othewise, I am going to just leave this as it does not have any effect on our code (I think lol)
  //update: this was originallin in showQuestion. However, because it was throwing an error, our try catch block was always going directly to catch lol. We do not need this to loop so we took it out and have put it here before we start looping
  master();

}

function master() {

  // console.log(score);


  //I wanna try a try/catch block as i know the quiz will error once we run out of questions from our JSON file
  //our catch block will bring us to a GAME OVER function that will log our score and intials within the client side storage
  try {
    //we go grab a question object


    var qAnda = questGrabber();

    //and pick it apart :>
    // console.log(qAnda);
    // console.log(qAnda[0].questions);
    // console.log(qAnda[0].questions.answers);

    var displayQanda = showQuestions(qAnda);
    console.log(displayQanda);

  }
   catch {

    // console.log("poop version 2"); 
    gameOver();   
  } 

};

function gameOver (){
 
  console.log("GAME OVER");
  var bigTup = document.getElementById("big-tup");
  var insideTup = document.getElementById("inside-tup");
  document.getElementById("inside-tup").innerHTML = "";
  var yum = document.createElement("div");
  var yummy = document.createElement("div");
  //bigTup.textContent = "GAME OVER";
  
  document.getElementById("big-tup").insertAdjacentHTML('afterbegin', 'GAME OVER');
  document.getElementById("big-tup").insertAdjacentElement('beforeend', yum);
  yum.textContent = " you answered " + score + " questions correctly";
  var aCh = prompt("Score: " + score + "   -Insert Name Below-");
  // let userObj = {"score": score, "name": aCh}; //I can do this an easier way that doesnt require JSON Stringify. Won't be as cool tho

  var nAs = aCh + ": " + score; //I hope javascript just coierces this into a string 
  localStorage.setItem("nameAndscore", nAs);
  var subScore = localStorage.getItem("nameAndscore");
  console.log(subScore); //Jesus christ we finally did it aka we got stuff in our storage object now
  document.getElementById("big-tup").insertAdjacentHTML('beforeend', 'HighScores:');
  document.getElementById("big-tup").insertAdjacentElement('afterend', yummy);
  yummy.textContent = subScore;
  yummy.textContent = subScore;


 

  




}

function showQuestions(qAnda) {


  var askQuestions = qAnda[0].questions.question;
  var giveAnswers = qAnda[0].questions.answers;
  const answerButton = document.getElementById("ansBtn");
  console.log(answerButton);

  giveAnswers.forEach(answer => {
    const button = document.createElement("button");
    console.log(button);
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);

    if (answer.truthValue) {
      button.dataset.truthValue = answer.truthValue;
    }

    button.addEventListener("click", grabbyAnswer);

  });

  /*  console.log(askQuestions); //prints the function
   console.log(giveAnswers);//prints the answers */
  document.getElementById("content").innerHTML = askQuestions;
  


  // console.log(giveAnswers);
  /* console.log("We are in the showQuestions functions V V V V ");
  console.log(qAnda);
  console.log(askQuestions);
  console.log(giveAnswers);
 */

  function reset() {
  
    console.log("poop");
    while (answerButton.firstChild) {
      answerButton.removeChild(answerButton.firstChild);
    }
  };
  
  function grabbyAnswer(e) {

    const slctBtn = e.target;
    const isCorrect = slctBtn.dataset.truthValue === "true";
    console.log(isCorrect);
    // console.log(slctBtn);


    if (isCorrect) {
      console.log("correct");
      

      reset();
      score++;
      master();
    }
    else {
      console.log("incorrect");
      
      reset();
      master();
    }


  }



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
      gameOver();

    }

  }, 1000);

}


strtGme.addEventListener("click", quizTime);