import readlineSync from 'readline-sync';

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;


const even = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name?  ');
  console.log(`Hello,  ${userName}!`);
  const game = (counter) => {
    if (counter >= 3) {
      console.log(`Congratulations, ${userName}`);
      return;
    }
    const num = random(1, 100);
    const answer = readlineSync.question(`Question: ${num}  `);
    console.log(`Your answer: ${answer} `);
    if (answer !== 'yes' && answer !== 'no') {
      console.log(`${answer} is wrong answer ;(. Correct answer was "yes". Let's try again, ${userName}!`);
    }
    if (num % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
      game(counter + 1);
    }
    if (num % 2 === 0 && answer === 'no') {
      console.log(`"no" is wrong answer ;(. Correct answer was "yes". Let's try again, ${userName}!`);
    }
    if (num % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
      game(counter + 1);
    }
    if (num % 2 !== 0 && answer === 'yes') {
      console.log(`"no" is wrong answer ;(. Correct answer was "yes". Let's try again, ${userName}!`);
    }
  };
  game(0);
};

export default even;
