import { cons } from 'hexlet-pairs';
import { game, randomNum } from '../gameConstructor';

const numAndAnswer = () => {
  const randomNums = [randomNum(1, 100), randomNum(1, 100)];
  const nums = `${randomNums[0]} ${randomNums[1]}`;
  const gcdForNums = (num1, num2) => {
    const gcd = (x, y) => {
      if (x !== 0) {
        return gcd(y % x, x);
      }
      return y;
    };
    if (num1 > num2) {
      return gcd(num1, num2);
    }
    return gcd(num2, num1);
  };
  const answer = gcdForNums(randomNums[0], randomNums[1]);
  const pair = cons(nums, String(answer));
  return pair;
};

const task = 'Find the greatest common divisor of given numbers.';

export default () => game(task, numAndAnswer);
