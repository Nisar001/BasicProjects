const questions = [
   {
      question: "Which us largest animal in the world ?",
      answers: [
         { 
            text: "Shark", 
            correct: false
         },
         { 
            text: "Blue Whale", 
            correct: true
         },{ 
            text: "Elephant", 
            correct: false
         },{ 
            text: "Tiger", 
            correct: false
         },
      ]
   },
   {
      question: "Which one is the popular mobile brand ?",
      answers: [
         { 
            text: "Nokia", 
            correct: false
         },
         { 
            text: "Samsung", 
            correct: false
         },{ 
            text: "Apple", 
            correct: true
         },{ 
            text: "OPPO", 
            correct: false
         },
      ]
   },
   {
      question: "Which is the smallest continent in the world ?",
      answers: [
         { 
            text: "Australia", 
            correct: true
         },
         { 
            text: "Asia", 
            correct: false
         },{ 
            text: "Africa", 
            correct: false
         },{ 
            text: "Arctic", 
            correct: false
         },
      ]
   },
   {
      question: "In which State Gwalior is located ?",
      answers: [
         { 
            text: "Uttar Pradesh", 
            correct: false
         },
         { 
            text: "Maharashtra", 
            correct: true
         },{ 
            text: "Rajasthan", 
            correct: false
         },{ 
            text: "Madhya Pradesh", 
            correct: true
         },
      ]
   }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
   currentQuestionIndex = 0;
   score = 0;
   nextButton.innerHTML = "Next";
   showQuestion();
}
function showQuestion(){
   let currentQuestion = questions[currentQuestionIndex];
   let questionNo = currentQuestionIndex + 1;
   questionElement.innerHTML = questionNo + ". " + currentQuestion.question; 
   
   currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButton.appendChild(button);
   });
}
startQuiz();