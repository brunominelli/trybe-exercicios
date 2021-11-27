// Variáveis e Constantes
let n = 7;
let divisores = 1;

// Execução
console.log('Exercício 06 - Números Primos');

// Laço que verifica os números primos
for (i = 2; i <= n; i++) {

    /* Verifica se a divisão é igual à 0 e incrementa
    o número de divisores*/
    if (n % i === 0) {
        divisores++;
    }
}

// Escreve o resultado
if (divisores === 2) {

    console.log(n + ' é primo!');

} else console.log(n + ' não é primo!');