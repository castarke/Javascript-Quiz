const question = document.getElementById("question")

const choices = Array.from(document.getElementsByClassName("choice-guess"));


let currentQuestion = {};
let acceptingAnswers = true;
let questionCounter = 0;
let availableQuestions = [];
var timer;
var timerCount;
var startButton = document.querySelector(".start-button");
var timeleft = 75;
var nameEl= document.getElementById('name');
var submitButton = document.querySelector(".submitButton");

let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<scripting>",
        choice2: "<script>",
        choice3: "<javascript>",
        choice4: "<js>",
        answer:2
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        choice1: "Both <head> section and <body> section",
        choice2: "There is no need to insert a JavaScript",
        choice3: "In the CSS",
        choice4: "In the <body> section",
        answer:4
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World);",
        choice2: "alertBox('Hello World);",
        choice3: "alert('Hello World);",
        choice4: "dm('Hello World);",
        answer:3
    },
    {
        question: "How do you call a function named myFunction",
        choice1: "call function myFunction()",
        choice2: "call myFunction()",
        choice3: "beepbop myFunction",
        choice4: "myFunction()",
        answer:4

    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        choice1: "Math.round(7.25)",
        choice2: "round(7.25)",
        choice3: "rnd(7.25)",
        choice4: "Math.rnd(7.25)",
        answer:1
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choice1: "onclick",
        choice2: "onmouseover",
        choice3: "onmouseclick",
        choice4: "onchange",
        answer:1
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        choice1: "X",
        choice2: "*",
        choice3: "-",
        choice4: "=",
        answer:4
    },
    {
        question: "How to write an IF statement in JavaScript?",
        choice1: "if i == 5 then",
        choice2: "if i = 5",
        choice3: "if (i == 5)  ",
        choice4: "if i = 5 then",
        answer:3
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        choice1: "top(x, y)",
        choice2: "Math.max(x, y)",
        choice3: "ceil(x, y)",
        choice4: "Math.ceil(x, y)",
        answer:   2
    },
    {
        question: "How does a FOR loop start?",
        choice1: "for (i = 0; i <= 5; i++)",
        choice2: "for (i <= 5; i++)",
        choice3: "for i = 1 to 5",
        choice4: "for (i = 0; i <= 5)",
        answer:1
    }
];

const numberofQuestions = 10;


function hideButton(){

    document.getElementById('start').style.visibility= 'hidden';
    document.getElementById('submitButton').style.visibility= 'hidden';
    document.getElementById('name').style.visibility= 'hidden';
    }
startGame = ()=> {
    questionCounter = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    timerCount=75
    startButton.disabled = true;
    getNewQuestion();
}
function endgame() {
    // create submit button on 118
    const submitContainer =document.getElementById("submitContainer");
    submitContainer.removeAttribute('class', 'hidden');
    document.getElementById('.submitButton')
    submitButton.addEventListener("click",submitHighscores);
    //   saving to local storage
    submitHighscores();
    //   change to highscore html
    window.location.href="highscore.html";
    }
    
getNewQuestion = () => {

const quizContainer = document.getElementById("quiz-container");
quizContainer.removeAttribute('class', 'hidden');

if(availableQuestions.length === 0 || questionCounter >= numberofQuestions) {
    // window.location.href="highscore.html";

    return endgame();
}   questionCounter++;

   const questionIndex = Math.floor(Math.random() * availableQuestions.length);
   currentQuestion = availableQuestions[questionIndex];
   question.innerText = currentQuestion.question;

   choices.forEach( choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
   });

   availableQuestions.splice(questionIndex, 1);
   
   acceptingAnswers = true;
};

choices.forEach(choice => {

    choice.addEventListener('click', function(event){

        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = event.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const chosenAnswer = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

// debugger
        selectedChoice.parentElement.classList.add(chosenAnswer);
        console.log(selectedAnswer)
        if(chosenAnswer == 'incorrect') 
        {
            timeleft-=5;
         } 

        if (chosenAnswer)
        
        setTimeout(() => {


        console.log(selectedAnswer == currentQuestion.answer);

        selectedChoice.parentElement.classList.remove(chosenAnswer);

        getNewQuestion();

        },1000);
    });
})

function startTimer() {
    // Sets timer
   
    var quizTimer = setInterval(function(){
      if(timeleft <= 0){
        clearInterval(quizTimer);
        document.getElementById("timer-text").innerHTML = "Finished";
      } else {
        document.getElementById("timer-text").innerHTML = timeleft + " seconds remaining";
      }
      timeleft --;
    }, 1000);}
    
start.addEventListener("click", startGame);


function submitHighscores() {
    var name = nameEl.value.trim();
    var score = {
        score: timeleft,
        name: name,
    }
    var highscore =
    JSON.parse(window.localStorage.getItem('highscore')) || [];

    highscore.push(score);
    window.localStorage.setItem('highscore', JSON.stringify(highscore));
}




        // question: "",
        // choice1: "",
        // choice2: "",
        // choice3: "",
        // choice4: "",
        // answer: