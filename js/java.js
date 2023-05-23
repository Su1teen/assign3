var questions = [
  {
    question: "What is the time complexity of an algorithm that runs in constant time?" +
      "\na) O(1)" +
      "\nb) O(log n)" +
      "\nc) O(n)" +
      "\nd) O(n^2)",
    answer: "a"
  },
  {
    question: "What is the time complexity of an algorithm that runs in logarithmic time?" +
      "\na) O(1)" +
      "\nb) O(log n)" +
      "\nc) O(n)" +
      "\nd) O(n^2)",
    answer: "b"
  },
  {
    question: "What is the time complexity of an algorithm that runs in linear time?" +
      "\na) O(1)" +
      "\nb) O(log n)" +
      "\nc) O(n)" +
      "\nd) O(n^2)",
    answer: "c"
  },
  {
    question: "What is the time complexity of an algorithm that runs in quadratic time?" +
      "\na) O(1)" +
      "\nb) O(log n)" +
      "\nc) O(n)" +
      "\nd) O(n^2)",
    answer: "d"
  },
  {
    question: "Which of the following time complexities represents the fastest algorithm?" +
      "\na) O(1)" +
      "\nb) O(log n)" +
      "\nc) O(n)" +
      "\nd) O(n^2)",
    answer: "a"
  },
  {
    question: "Which of the following time complexities represents the slowest algorithm?" +
      "\na) O(1)" +
      "\nb) O(log n)" +
      "\nc) O(n)" +
      "\nd) O(n^2)",
    answer: "d"
  },
  {
    question: "What does Big O notation represent?" +
      "\na) The exact running time of an algorithm." +
      "\nb) The best-case scenario of an algorithm." +
      "\nc) The average running time of an algorithm." +
      "\nd) The upper bound of the running time of an algorithm.",
    answer: "d"
  }
];
  
var score = 0;
var win= new Audio('suiiii.mp3');
var lose= new Audio('fail.mp3');
function test() {
  for (var i = 0; i < questions.length; i++) {
    var otvet = window.prompt(questions[i].question);
    if (otvet === questions[i].answer) {
      score++;
      alert("Correct, Keep it up!");

    } else {
      alert("Don't worry, be Happy!");
    }
  }
  if(score>4){
    win.play();
    alert("You scored "+ score+" out of 7 points!!!");
  }else{ lose.play();
    alert("You scored "+score+" out of 7 points :(");
}
score=0;
}

const startBtn = document.getElementById("start");
startBtn.addEventListener("click", test);
