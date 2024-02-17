

import data from './questions.json' assert {type: 'json'};

console.log(data);
console.log(data.quizQuestions[2]);

//Global variables
let score = 0;
var timer = document.getElementById("timer");
var strtGme = document.getElementById("strt-bttn");
var secondsLeft = 60;
var questionsLeft = true;

//the function that runs once the start game button is pressed
function quizTime() {

  score = 0;
  console.log(score);
  document.getElementById("strt-bttn").innerHTML = "";
  setTime();
  master();

}

function master() {

  //I wanna try a try/catch block as i know the quiz will error once we run out of questions from our JSON file
  //our catch block will bring us to a GAME OVER function that will log our score and intials within the client side storage
  try {
    //we go grab a question object


    var qAnda = questGrabber();

    //and pick it apart :>
   

    var displayQanda = showQuestions(qAnda);
    console.log(displayQanda);

  }
   catch {
    questionsLeft = false;
   
  } 

};
//we load the scores from local storage
function loadScores(){
  var savedScores = JSON.parse(localStorage.getItem("saved-scores"));//intialize savedScores to equal a JSON parse of getItem("saved-scores") which grabes the value assicaited with (saved-scores) grabbing 
  console.log(savedScores);
  if(savedScores === null || savedScores.length ==0){ 
    //if the savedScores is null (which will be the case if it is the first saved score) OR the savedScores.length equals 0
    // we leave the function
    return
  }
  //render my stuff
  console.log(savedScores);
  return savedScores;
}

function gameOver (){ 
  console.log("GAME OVER");
  document.getElementById("inside-tup").innerHTML = "";
  //get the element of our html into a js variable. We are getting our from the id ="big-tup"
  var containerEl = document.getElementById("big-tup");

  //here we are creating div elements our HTML doc
  var yum = document.createElement("div");
  var yummy = document.createElement("div");
  
 
  containerEl.insertAdjacentHTML('afterbegin', 'GAME OVER'); //we create a container just before the element, before it first child,  
  containerEl.insertAdjacentElement('beforeend', yum);//and before the end after it's last last child
  yum.textContent = " you answered " + score + " questions correctly"; // we are setting the the text content property of yum  to the string and displayed score
  
 
  if(confirm("Wouuld you like to save a score")){
    var aCh = prompt("Score: " + score + "   -Insert Name Below-");
    var scoreToSave = {
      name: aCh,
      score: score
    }
    saveScore(scoreToSave)

  }

  var loaded = loadScores(); //here we load the scores

  var nAs = aCh + ": " + score; 
  localStorage.setItem("nameAndscore", nAs);
  var subScore = localStorage.getItem("nameAndscore");
  console.log(subScore); 
  containerEl.insertAdjacentHTML('beforeend', 'HighScores:');
  containerEl.insertAdjacentElement('afterend', yummy);
  yummy.textContent = subScore;

  for (var i = 0; i < loaded.length; i++){
    console.log(loaded[i]);
    yummy.innerHTML += `<h3>${loaded[i].name}: ${loaded[i].score}</h3>`
  }

}


function saveScore(newScore){
  // we need to put it into a list
  var savedScores = JSON.parse(localStorage.getItem("saved-scores"))
  if(savedScores === null){
    localStorage.setItem("saved-scores", JSON.stringify([newScore]))
    return
  }
  savedScores.push(newScore)  
  localStorage.setItem("saved-scores", JSON.stringify(savedScores))
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

 
  document.getElementById("content").innerHTML = askQuestions;
  



  function reset() {

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
      secondsLeft -=5
      reset();
      master();
    }


  }

  return giveAnswers;
  
};

function questGrabber() {
  var grabQuestions = data.quizQuestions;

  //WE are grabbing the the index of the object that is chosen and pulling out of the array. 

  const questIndex = grabQuestions.indexOf(getRandom(grabQuestions));
  const plchldr = grabQuestions.splice(questIndex, 1);
 
  return plchldr;
}


function getRandom(list1) {
  var ranD = list1[Math.floor((Math.random() * list1.length))];
  return ranD;
}


//timer functions
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {


    secondsLeft--;
    timer.textContent = secondsLeft;
    // console.log(secondsLeft);
    // condition1 = out of time
    // condition2 = done with the quiz/ out of questions
    // if (condition1     condition2)
    if (secondsLeft <= 0 || questionsLeft === false ){
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      gameOver();

    }

  }, 1000);

}

strtGme.addEventListener("click", quizTime);

// var nums = [1,2,3]
// console.log(nums)
// var newNums = nums.push(4)

// console.log(newNums)
// console.log(nums)