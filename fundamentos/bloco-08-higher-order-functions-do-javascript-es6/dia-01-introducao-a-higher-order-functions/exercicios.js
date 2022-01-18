// Exercício 01
console.log('Exercício 01');
const newEmployees = (callback) => {
  const employees = {
   id1: createEmployss('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
   id2: createEmployss('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
   id3: createEmployss('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const createEmployss = (fullName) => (
  {
    name: fullName, 
    email: `${fullName.toLowerCase().split(' ').join('_')}@trybe.com`
  }
);

console.log(newEmployees(createEmployss));

// Exercício 02
console.log('\nExercício 02');
const raffle = (bet, callback) => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  return ` Aposta: ${bet}\n Resultado: ${randomNumber}\n ${!callback(bet, randomNumber) ? 'Tente novamente' : 'Parabéns você ganhou'}`;
} 
const raffleResult = (bet, raffleNumber) => bet === raffleNumber;

console.log(raffle(3, raffleResult));

// Exercício 03
console.log('\nExercício 03');

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const validateAnswers = (rightAnswers, studentAnswers) => {
    if (rightAnswers === studentAnswers) return 1;
    if (studentAnswers === 'N.A') return 0;
    return 0.5;
}

const evaluation = (rightAnswers, studentAnswers, callback) => {
    let score = 0;
    for (let index = 0; index < rightAnswers.length; index += 1) {
        const result = callback(rightAnswers[index], studentAnswers[index]);
        score += result;
    }
    return `Nota: ${score}`
};

console.log(evaluation(RIGHT_ANSWERS, STUDENT_ANSWERS, validateAnswers));