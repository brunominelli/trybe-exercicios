// Variáveis e Constantes
let n = 5;
let linha = '';

let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;

// Execução
console.log('Exercício 04 - Pirâmide de Asteriscos!\n');

for (let i = 0; i <= meio; i++) { // Linha da matriz

    for (let j = 0; j <= n; j++) { // Coluna da matriz

        /* Verifica se o íncice 'j' é menor que a variável 'esquerda'
        e maior que a variável 'direita' antes de incrementar os 
        asteriscos e os espaços*/
        if (j > esquerda && j < direita) {
            
            linha = linha + '*';

        } else linha = linha + ' ';
    }
    
    // Escreve o resultado
    console.log(linha);

    // Prepara o laço para o próximo incremento
    linha = '';
    direita += 1;
    esquerda -= 1;
}