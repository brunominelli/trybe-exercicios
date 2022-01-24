// escreva sum abaixo
const sum = (...numbers) => numbers.reduce(((accumulator, current) => accumulator + current));
const numbers = [5, 2, 3, 60, 58, 20];
console.log(`Soma: ${sum(...numbers)}\nArray: ${numbers.join(', ')} `);
