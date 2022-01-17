// myFizzBuzz.test.js
const myFizzBuzz = require('./myFizzBuzz.js');

describe('Exercício 03 - Testa a função myFizzBuzz()', () => {
  it('Verifica se retorna o valor esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(1)).toBe(1);
    expect(myFizzBuzz('2')).toBe(false);
  })
});