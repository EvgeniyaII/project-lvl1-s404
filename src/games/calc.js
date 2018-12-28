import { cons } from 'hexlet-pairs';
import { game, randomNum, randomOperands } from '../gameConstructor';

const task = 'What is the result of the expression?';
const numAndAnswer = () => {
  const operands = ['+', '-', '*'];
  const randomExpression = [randomNum(1, 10), randomOperands(operands), randomNum(1, 10)];
  const num = `${randomExpression[0]} ${randomExpression[1]} ${randomExpression[2]}`;
  let answer;
  if (randomExpression[1] === '+') {
    answer = randomExpression[0] + randomExpression[2];
  }
  if (randomExpression[1] === '-') {
    answer = randomExpression[0] - randomExpression[2];
  }
  if (randomExpression[1] === '*') {
    answer = randomExpression[0] * randomExpression[2];
  }
  return cons(num, String(answer));
};

export default () => game(task, numAndAnswer);
