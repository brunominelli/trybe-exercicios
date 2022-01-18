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