import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const gameRounds = 3;

export const game = (string, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(string);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello,  ${userName}!`);
  const iter = (counter) => {
    if (counter === gameRounds) {
      console.log(`Congratulations, ${userName}`);
      return;
    }
    const gameData = generateGameData();
    const question = car(gameData);
    const correctAnswer = cdr(gameData);
    const userAnswer = readlineSync.question(`Question: ${question} `);
    console.log(`Your answer: ${userAnswer} `);
    if (correctAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;( Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
    } else {
      console.log('Correct!');
      iter(counter + 1);
    }
  };
  iter(0);
};
