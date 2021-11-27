// Variáveis e Constantes
const n = 5;
let asterisco = '*';
let linha = '';
let posicao = n;

// Execução
console.log('Exercício 03 - Triângulo Invertido de Asteriscos!\n');

// Escreve o resultado das linhas
for (let i = 0; i <= n; i++) { // Linha da matriz
    
    // Incrementa os espaços e/ou os asteriscos
    for (let j = 0; j <= n; j++) { // Coluna da matriz

        // Verifica se o índice 'j' é menor ou igual à variável posição
        if (j <= posicao) {
            
            linha = linha + ' ';

        } else linha = linha + asterisco;
    }

    // Escreve o resultado
    console.log(linha);

    // Prepara o laço para o próximo incremento
    linha = '';
    posicao -= 1;
}