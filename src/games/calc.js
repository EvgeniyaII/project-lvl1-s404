import { cons } from 'hexlet-pairs';
import game from '../gameConstructor';
import getRandomNum from '../utils';

const task = 'What is the result of the expression?';

const getRandomMathOperation = (arr) => {
  const startIndex = 0;
  const lengthOfArr = arr.length;
  const numberOfOperand = getRandomNum(startIndex, lengthOfArr);
  return arr[numberOfOperand];
};

const operands = ['+', '-', '*'];

const generateGameData = () => {
  const firstInt = getRandomNum(1, 10);
  const secondInt = getRandomNum(1, 10);
  const randomOperand = getRandomMathOperation(operands);
  const question = (`${firstInt} ${randomOperand} ${secondInt}`);
  let answer;
  switch (randomOperand) {
    case '+':
      answer = firstInt + secondInt;
      break;
    case '-':
      answer = firstInt - secondInt;
      break;
    default:
      answer = firstInt * secondInt;
  }

  return cons(question, String(answer));
};

export default () => game(task, generateGameData);
