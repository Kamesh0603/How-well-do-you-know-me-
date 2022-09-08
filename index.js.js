var readlineSync = require('readline-sync');
var username = readlineSync.question("What's ur name? ")
var score = 0;
var qa = [
  q1 = {
    q1: 'What is my name? ',
    a1: 'kamesh'
  },
  q2 = {
    q1: 'What is my favourite dish? ',
    a1: 'pizza'
  },
  q3 = {
    q1: 'Who is my favourite footballer? (Hint: Leo) ',
    a1: 'messi'
  },
  /*q4={
   q1:'inspiratipon?',
   a1:'naruto',
   },
  q5={
   q1:'idolize?',
   a1:'success'
   },*/
];
var highscores = [
  highscore = {
    name: "you",
    score: 3
  },
  secondhighscore = {
    name: "you again",
    score: 2
  },
]

console.log("Welcome " + username + "! ");
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

console.log(`yor score is ${score}. check out the highscores:`)
highscores.forEach(hs => { console.log(hs.name + " " + hs.score) });

