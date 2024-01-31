# Quiz-Master
Can you pass the quiz??

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the Challenge instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.

Legacy code and notes
    //an array with each item having two values
        //A question
        //and an array of answers
            //the arrays of answers will have foue items with two value: an answer and the value of true or false
            //all the answers that are not the correct answer will have a value of false
            // the correct answe will have a value of true


/* var question1 = {};
var q1AnswerOne = {answer: "Functions" , truthValue: false};
var q1AnswerTwo = {answer: "Primative values" , truthValue: true};
var q1AnswerThree = {answer: "Boolean values" , truthValue: false};
var q1AnswerFour = {answer: "Arrays" , truthValue: false};

question1.question = "All values in JavaScript are objects excpet...?";
question1.answer1 = q1AnswerOne;
question1.answer2 = q1AnswerTwo;
question1.answer3 = q1AnswerThree;
question1.answer4 = q1AnswerFour;

var question2 = {};
var q2AnswerOne = {answer: "no" , truthValue: true};
var q2AnswerTwo = {answer: "yes" , truthValue: true};
var q2AnswerThree = {answer: "idk" , truthValue: false};

console.log(q2AnswerOne.truthValue);
question2.question = "Is god real...?";
question2.answer1 = q2AnswerOne;
question2.answer2 = q2AnswerTwo;
question2.answer3 = q2AnswerThree;

console.log(question1 , question2);

var quesArr = [question1 , question2];


//Functions


    //A function that activates when Start Game is clicked (the is ran via an event listener when the START GAME button is pressed)
        //This is going to be the function that iniates all the other functions. This is the daddy function. This function is intialized via the event listener
    
    //A function that chooses a random quesiton from an array

    //A funciton that is a count down timer(75 secs) When the timer equals zero the game ends
        //there will also be a penality for getting questions wrong (15 secs)
        //Maybe we can add a addtional amount of time for questions rights, however keep in mind, that if we add time there needs to be enough questions so that getting extra time is worth it. 
        //Another thing we could do is give extra points dependent how quick the answer is submitted. 
    
    //A function that keeps track of current score
        //

    //A function that store the data to the browser (basically stores high scores but maybe we can also store answers to questions too.)
    
    //A function to grab the users intials when the game ends

    // We intially were going to make each question a object within our js file. However, fuck that.
    //Turns out JSON doesnt support comments??????? tf

    //it took me ten years to figure out how to import the json lol

    //day  10 still cant figure this out
    