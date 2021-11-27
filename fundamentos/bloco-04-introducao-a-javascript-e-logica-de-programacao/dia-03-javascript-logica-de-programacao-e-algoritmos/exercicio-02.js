// Variáveis e Constantes
const n = 5;
let asterisco = '';

// Execução
console.log('Exercício 02 - Triângulo de Asteriscos!\n');

// Escreve a quantidade de asteriscos igual ao valor do índice 'i'
for (let i = 0; i <= n; i++) {
    
    // Verifica se o índice 'i' é maior do que 0
    if (i > 0) {
        asterisco += '*';
    }

    // Escreve o resultado 
    console.log(asterisco);
}