let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 01
console.log('Exercício 01');
for (let index = 0; index < numbers.length; index++){ 

    console.log(numbers[index]);
}

// Exercício 02
console.log('\nExercício 02');

let sum = 0;

for (let index = 0; index < numbers.length; index++) {

    sum = sum + numbers[index];
}

console.log(sum);

// Exercício 03
console.log('\nExercício 03');

let mediaAritmetica = sum / (numbers.length);

console.log(mediaAritmetica);

// Exercício 04
console.log('\nExercício 04');

if (mediaAritmetica > 20) {

    console.log('Valor maior que 20.');

} else console.log('Valor menor ou igual a 20.');

// Exercício 05
console.log('\nExercício 05');

let maior = 0;

for (index = 0; index < numbers.length; index++) {
    
    if (numbers[index] > maior) {
        maior = numbers[index];
    }
    
}

console.log(maior);

// Exercício 06
console.log('\nExercício 06');

let impares = 0

for (index = 0; index < numbers.length; index++) {
    
    if (numbers[index] % 2 === 1) {
       impares++;
    }
    
}

if (impares != 0) {

    console.log('Há ' + impares + ' valor(es) ímpar(es) no array.');

} else console.log('Nenhum valor ímpar encontrado.')

// Exercício 07
console.log('\nExercício 07');

let menorValor = 999;
let number = 0;
for (index = 0; index < numbers.length; index++) {
    

    if (numbers[index] < menorValor) {

        menorValor = numbers[index];

    } else if(menorValor > numbers[index]){
        
        menorValor = numbers[index];

    }
    
}

console.log(menorValor);

// Exercício 08
console.log('\nExercício 08');

let array25 = [];

for(index = 0; index < 25; index++){
     array25.push(index + 1);
}

console.log(array25);

// Exercício 09
console.log('\nExercício 09');

for(index = 0; index < array25.length; index++){
    
    console.log(array25[index] / 2);
}