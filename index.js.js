var readlineSync = require('readline-sync');
var username = readlineSync.question("What's your name? ")
var score = 0;
var qa = [
  q1 = {
    q1: '1. How old am I? --> ',
    a1: '22'
  },
  q2 = {
    q1: '2. What is my favourite dish? --> ',
    a1: 'pizza'
  },
  q3 = {
    q1: '3. What is my favourite sport? --> ',
    a1: 'football'
  },
  q4 = {
    q1: '4. What is my favourite color? --> ',
    a1: 'yellow'
  },
  q5 = {
    q1: '5. Where am I from? --> ',
    a1: 'mysore'
  },

];
var highscores = [
  highscore = {
    name: "Kamesh",
    score: 5
  },
  secondhighscore = {
    name: "Tanay",
    score: 4
  },
]

console.log("Welcome " + username + "! Let's play DO YOU KNOW Kamesh? ");
console.log("----------------");
qa.forEach(question => {
  var useranswer = readlineSync.question(question.q1);
  if (useranswer.toLowerCase() == question.a1) {
    score++;
    console.log("Right answer");
    console.log(`your score is ${score}`);
    console.log("----------------");
  }
  else {
    console.log("Wrong answer");
    console.log(`your score is ${score}`);
    console.log("----------------");
  };
});

console.log(`Your score is ${score}. Check out the masters of this game:`)
highscores.forEach(hs => { console.log(hs.name + " " + hs.score) });

