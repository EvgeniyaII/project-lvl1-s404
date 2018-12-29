import { cons } from 'hexlet-pairs';
import { game } from '../gameConstructor';
import getRandomNum from '../utils';

const getGcdForTwoRandomNums = (firstInt, secondInt) => {
  const getGcd = (int1, int2) => {
    if (int1 !== 0) {
      return getGcd(int2 % int1, int1);
    }
    return int2;
  };
  if (firstInt > secondInt) {
    return getGcd(firstInt, secondInt);
  }
  return getGcd(secondInt, firstInt);
};

const generateGameData = () => {
  const firstRandomInt = getRandomNum(1, 100);
  const secondRandomInt = getRandomNum(1, 100);
  const question = `${firstRandomInt} ${secondRandomInt}`;
  const answer = getGcdForTwoRandomNums(firstRandomInt, secondRandomInt);
  return cons(question, String(answer));
};

const task = 'Find the greatest common divisor of given numbers.';

export default () => game(task, generateGameData);
