import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const randomOperands = (arr) => {
  const startIndex = 0;
  const lengthOfArr = arr.length;
  const numberOfOperand = randomNum(startIndex, lengthOfArr);
  return arr[numberOfOperand];
};

export const game = (string, numAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(string);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello,  ${userName}!`);
  const iter = (counter) => {
    const gameRounds = 3;
    if (counter === gameRounds) {
      console.log(`Congratulations, ${userName}`);
      return;
    }
    const numOrAnswer = numAndAnswer();
    const answer = readlineSync.question(`Question: ${car(numOrAnswer)} `);
    console.log(`Your answer: ${answer} `);
    if (cdr(numOrAnswer) !== answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${cdr(numOrAnswer)}. Let's try again, ${userName}!`);
    } else {
      console.log('Correct!');
      iter(counter + 1);
    }
  };
  iter(0);
};
