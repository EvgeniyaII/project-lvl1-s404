import { cons } from 'hexlet-pairs';
import game from '../gameConstructor';
import getRandomNum from '../utils';

const isPrime = (num) => {
  if (num === 2) {
    return true;
  }
  if (num === 1 || num % 2 === 0) {
    return false;
  }
  const startDivider = 3;
  for (let i = startDivider; i < num; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const generateGameData = () => {
  const question = getRandomNum(1, 1000);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};
const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => game(task, generateGameData);
