// Variáveis e Constantes
const n = 5;
let asterisco = '';

// Execução
console.log('Exercício 01 - Quadrado de Asteriscos!\n');

// Acrescenta os asteriscos à linha.
for (let i = 0; i <= n; i++) {
    
    // Verifica se o índice 'i' é maior do que 0
    if (i > 0) {
        asterisco += '*';
    }
}

// Escreve o número de linhas com o mesmo número de asteriscos.
for (let i = 0; i < n; i++) {
    console.log(asterisco);
}