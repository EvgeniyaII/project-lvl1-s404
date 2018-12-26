import readlineSync from 'readline-sync';

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
const even = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello,  ${userName}!`);
  const game = () => {
    const num = random(1, 100);
    const answer = readlineSync.question(`Question: ${num}`);
    console.log(`Your answer: ${answer} `);
    if (num % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    }
    if (num % 2 === 0 && answer === 'no') {
      console.log(`"no" is wrong answer ;(. Correct answer was "yes". Let's try again, ${userName}!`);
    }
    if (num % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    }
    if (num % 2 !== 0 && answer === 'yes') {
      console.log(`"no" is wrong answer ;(. Correct answer was "yes". Let's try again, ${userName}!`);
    }
  };
  game();
};
even();
