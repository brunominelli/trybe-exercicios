// Variáveis e Constantes
let n = 5;
let linha = '';

let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;

// Execução
console.log('Exercício 04 - Pirâmide de Asteriscos!\n');

for(let i = 0; i <= meio; i++){ // Linha da matriz
    for(let j = 0; j <= n; j++){ // Coluna da matriz
        //console.log(i + ' - ' + j);
        if (j > esquerda && j < direita) {
            
            linha = linha + '*';

        }else linha = linha + ' ';
        console.log(i + ' - ' + j);
    }
    
    console.log(linha);
    linha = '';
    direita += 1;
    esquerda -= 1;
}