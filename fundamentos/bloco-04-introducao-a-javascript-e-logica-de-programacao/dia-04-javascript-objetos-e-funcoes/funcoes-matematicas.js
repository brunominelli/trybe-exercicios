/*  Exercício de fixação de Funções
---------------------------------------
    OPERAÇÕES ARITIMÉTICAS 
*/

// Contantes das funções
const a = 9;
const b = 3;
const c = 7

// Função: Adição
function adicao(a,b){
    return a + b;
}

// Função: Subtração
function subtracao(a,b){
    return a - b;
}

// Função: Multiplicação
function multiplicacao(a,b){
    return a * b;
}

// Função: Divisão
function divisao(a,b){
    return a / b;
}

// Função: Módulo
function modulo(a,b){
    return a % b
}

/* Resultados */
// Exercício 01.01 - Adição
console.log('Exercício 01.01 - Adição');
console.log(a + ' + ' + b + ' = ' + adicao(a,b));

// Exercício 01.02 - Subtração
console.log('\nExercício 01.02 - Subtração');
console.log(a + ' - ' + b + ' = ' + subtracao(a,b));

// Exercício 01.03 - Multplicação
console.log('\nExercício 01.03 - Multiplicação');
console.log(a + ' * ' + b + ' = ' + multiplicacao(a,b));

// Exercício 01.04 - Divisão
console.log('\nExercício 01.04 - Divisão');
console.log(a + ' / ' + b + ' = ' + divisao(a,b));

// Exercício 01.05 - Módulo
console.log(a + ' % ' + b + ' = ' + (modulo(a,b)));

// Exercício 02
console.log('\nExercício 02 - Maior de Dois Números');
function maiorDeDoisNumeros(a,b){
    if (a > b) {
        return a + ' é maior do que ' + b;
    } else if (a < b) {
        return b + ' é maior do que ' + a;
    }
}
console.log(maiorDeDoisNumeros(a,b));

// Exercício 03
console.log('\nExercício 03 - Maior de Três Números');
function maiorDeTresNumeros(a,b,c){
    if (a > b && a > c) {
        return a + ' é maior do que ' + b + ' e ' + c;
    } else if (b > a && b > c) {
        return b + ' é maior do que ' + a + ' e ' + c;
    } else if (c > a && c > b) {
        return c + ' é maior do que ' + a + ' e ' + b;
    }
}
console.log(maiorDeTresNumeros(a,b,c));

// Exercício 04