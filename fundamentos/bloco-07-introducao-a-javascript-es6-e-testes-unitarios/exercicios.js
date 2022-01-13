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
let sortArray = (array) => {
  for (let index = 0; index < array.length; index += 1) {
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] > array[index + 1]) {
        let aux = array[index];
        array[index] = array[index + 1];
        array[index + 1] = aux;
      }
    }
  }
  return array;
};

console.log(sortArray(oddsAndEvens)); // será necessário alterar essa linha 😉
