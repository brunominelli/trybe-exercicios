const sum = require('./sum.js');

describe('Exercício 1 - Teste da Função sum()', () => {
  it('Deve retornar o resultado da soma', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  
  it('Deve disparar um erro ao receber uma string como parâmetro', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
});