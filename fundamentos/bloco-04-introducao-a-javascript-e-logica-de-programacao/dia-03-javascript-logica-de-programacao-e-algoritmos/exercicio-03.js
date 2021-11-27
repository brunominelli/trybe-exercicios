// Variáveis e Constantes
const n = 5;
let asterisco = '*';
let linha = '';
let posicao = n;

// Execução
console.log('Exercício 03 - Triângulo Invertido de Asteriscos!\n');

for(let i = 0; i <= n; i++){
    for(let j = 0; j <= n; j++){
    
        if (j <= posicao) {
            
            linha = linha + ' ';

        }else linha = linha + asterisco;
    }

    console.log(linha);
    linha = '';
    posicao -= 1;
}