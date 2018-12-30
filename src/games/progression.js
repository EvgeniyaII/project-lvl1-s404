import { cons } from 'hexlet-pairs';
import game from '../gameConstructor';
import getRandomNum from '../utils';

const progressionLength = 10;

const getProgression = (difference, length, number) => {
  let startNumber = number;
  const progression = [];
  for (let i = length; i > 0; i -= 1) {
    progression.push(startNumber);
    startNumber += difference;
  }
  return progression;
};

const generateGameData = () => {
  const startNumber = getRandomNum(1, 100);
  const difference = getRandomNum(1, 10);
  const progression = getProgression(difference, progressionLength, startNumber);
  const hiddenElementIndex = getRandomNum(1, progressionLength);
  const hiddenElement = progression[hiddenElementIndex];
  const answer = hiddenElement;
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');
  return cons(question, String(answer));
};

const task = 'What number is missing in the progression?';

export default () => game(task, generateGameData);
