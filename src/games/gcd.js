import { cons } from 'hexlet-pairs';
import game from '../gameConstructor';
import getRandomNum from '../utils';

const findGcd = (first, second) => {
  const getGcd = (int1, int2) => {
    if (int1 !== 0) {
      return getGcd(int2 % int1, int1);
    }
    return int2;
  };
  const max = Math.max(first, second);
  const min = Math.min(first, second);
  return getGcd(max, min);
};

const generateGameData = () => {
  const firstInt = getRandomNum(1, 100);
  const secondInt = getRandomNum(1, 100);
  const question = `${firstInt} ${secondInt}`;
  const answer = findGcd(firstInt, secondInt);
  return cons(question, String(answer));
};

const task = 'Find the greatest common divisor of given numbers.';

export default () => game(task, generateGameData);
