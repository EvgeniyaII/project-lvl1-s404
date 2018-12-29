import { cons } from 'hexlet-pairs';
import { game } from '../gameConstructor';
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
  const firstRandomInt = getRandomNum(1, 10);
  const secondRandomInt = getRandomNum(1, 10);
  const randomOperand = getRandomMathOperation(operands);
  const question = (`${firstRandomInt} ${randomOperand} ${secondRandomInt}`);
  let answer;
  switch (randomOperand) {
    case '+':
      answer = firstRandomInt + secondRandomInt;
      break;
    case '-':
      answer = firstRandomInt - secondRandomInt;
      break;
    default:
      answer = firstRandomInt * secondRandomInt;
  }

  return cons(question, String(answer));
};

export default () => game(task, generateGameData);
