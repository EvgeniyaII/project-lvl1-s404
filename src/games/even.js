mport readlineSync from 'readline-sync';

const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const gameNumber = () => {
  const num = randomNum(1, 10);
  return num;
};

console.log(gameNumberInt);
const isEven = num => num % 2 === 0;
const correctAnswer = isEven(gameNumber()) ? 'yes' : 'no';
const task = 'Answer "yes" if number even otherwise answer "no".';

const game = (string, myAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(string);
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello,  ${userName}!`);
  const iter = (counter) => {
    const question = gameNumber();
    const gameRounds = 3;
    if (counter === gameRounds) {
      console.log(`Congratulations, ${userName}`);
      return;
    }
    const answer = readlineSync.question(`Question: ${question} `);
    console.log(`Your answer: ${answer} `);
    if (myAnswer !== answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${myAnswer}. Let's try again, ${userName}!`);
    } else {
      console.log('Correct!');
      iter(counter + 1);
    }
  };
  iter(0);
};
game(task, correctAnswer);



export default even;
