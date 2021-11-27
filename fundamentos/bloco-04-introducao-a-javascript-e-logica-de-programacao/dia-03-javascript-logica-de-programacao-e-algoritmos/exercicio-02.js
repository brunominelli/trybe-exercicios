// Variáveis e Constantes
const n = 5;
let asterisco = '';

// Execução

console.log('Exercício 02 - Triângulo de Asteriscos!\n');

for(let i = 0; i <= n; i++){
       
    if(i > 0){
        asterisco += '*';
    }

    console.log(asterisco);
}