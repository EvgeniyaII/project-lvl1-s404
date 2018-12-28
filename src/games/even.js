import { cons } from 'hexlet-pairs';
import { game, randomNum } from '../gameConstructor';

const isEven = num => num % 2 === 0;
const numAndAnswer = () => {
  const num = randomNum(1, 100);
  const answer = isEven(num) ? 'yes' : 'no';
  return cons(num, answer);
};

const task = 'Answer "yes" if number even otherwise answer "no".';
export default () => game(task, numAndAnswer);
