import readlineSync from 'readline-sync';

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const even = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name?  ');
  console.log(`Hello,  ${userName}!`);

  const game = (counter) => {
    const question = random(1, 100);
    const isEven = num => num % 2 === 0;
    const correctAnswer = isEven(question) === true ? 'yes' : 'no';
    const gameRounds = 3;
    if (counter === gameRounds) {
      console.log(`Congratulations, ${userName}`);
      return;
    }
    const answer = readlineSync.question(`Question: ${question}  `);
    console.log(`Your answer: ${answer} `);
    if (correctAnswer !== answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`);
    } else {
      console.log('Correct!');
      game(counter + 1);
    }
  };

  game(0);
};

export default even;
