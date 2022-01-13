/* Exercício 01 */
function testingScope(escopo) {
  if (escopo === true) {
   let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
   ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
   console.log(ifScope);
  } else {
   const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
   console.log(elseScope);
  }
  /* console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida. */
}

testingScope(false);

/* Exercício 02 */
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const sortArray = array => `Os números ${array.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`;
console.log(sortArray(oddsAndEvens)); // será necessário alterar essa linha 😉

/* Exercicio 03 */
const factorial = number  => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));

/* Exercico 04 */
const longestWord = string => {
    let wordArray = string.split(' ');
    let wordLength = 0;
    let longestWord = '';

    for (let word in wordArray) {
        if (wordArray[word].length > wordLength) {
            wordLength = word.length;
            longestWord = wordArray[word];
        }
    }

    return longestWord;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')); // retorna 'aconteceu' */

/* Exercicio 05 - Arquivo HTML*/
