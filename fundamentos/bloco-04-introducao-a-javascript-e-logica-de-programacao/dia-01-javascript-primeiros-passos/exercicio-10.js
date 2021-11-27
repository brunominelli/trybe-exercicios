const valorCusto = 15;
const valorVenda = 60;

let valorCustoTotal = valorCusto + (valorCusto * 1.2);
let lucro = valorVenda - valorCustoTotal;

console.log('LUCRO!\n');

console.log('Custo Bruto: R$' + valorCusto + '\n' +
            'Custo Total (+20%): R$' + valorCustoTotal + '\n' +
            'Valor de Venda: R$' + valorVenda + '\n' +
            'Lucro: R$' + lucro);