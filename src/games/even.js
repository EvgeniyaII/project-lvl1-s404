import { cons } from 'hexlet-pairs';
import { game } from '../gameConstructor';
import getRandomNum from '../utils';

const isEven = num => num % 2 === 0;
const generateGameData = () => {
  const question = getRandomNum(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

const task = 'Answer "yes" if number even otherwise answer "no".';
export default () => game(task, generateGameData);
