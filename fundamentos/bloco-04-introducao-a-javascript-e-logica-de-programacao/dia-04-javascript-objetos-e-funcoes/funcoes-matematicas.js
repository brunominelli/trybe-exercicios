/*  Exercício de fixação de Funções
---------------------------------------
    OPERAÇÕES ARITIMÉTICAS 
*/

// Contantes das funções
const a = 9;
const b = 3;

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
// Soma
console.log(a + ' + ' + b + ' = ' + adicao(a,b));

// Subtração
console.log(a + ' - ' + b + ' = ' + subtracao(a,b));

// Multplicação
console.log(a + ' * ' + b + ' = ' + multiplicacao(a,b));

// Divisão
console.log(a + ' / ' + b + ' = ' + divisao(a,b));

// Módulo
console.log(a + ' % ' + b + ' = ' + (modulo(a,b)));