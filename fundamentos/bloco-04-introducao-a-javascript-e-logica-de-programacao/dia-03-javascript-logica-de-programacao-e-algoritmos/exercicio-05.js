// Variáveis e Constantes
let n = 7;
let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;

// Execução
console.log('Exercício 05 - Pirâmide Oca de Asteriscos!\n');

// Prepara as linhas da matriz
for (let i = 1; i <= meio; i++) { // Linha da matriz
    
    let linha = '';
    
    // Prepara as colunas da matriz
    for (let j = 1; j <= n; j++) { // Coluna da matriz
        
        /* Verifica se o índice 'j' é igual a variável 
        'esquerda' ou 'direita' ou 'meio' antes de incrementar
        os asteriscos e os espaços */
        if (j == esquerda || j == direita || i == meio) {
            
            linha += '*';

        } else linha += ' ';
    }

    // Prepara o laço para o próximo incremento
    esquerda -= 1;
    direita += 1;
    
    // Prepara o laço para o próximo incremento
    console.log(linha);
}