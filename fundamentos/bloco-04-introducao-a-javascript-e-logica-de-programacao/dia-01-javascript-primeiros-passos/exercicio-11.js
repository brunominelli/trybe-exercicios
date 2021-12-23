let salarioBruto = 4680;
let salarioLiquido = 0;
let aliquotaINSS = 0;
let aliquotaIR = 0;

console.log('CÁLCULO - SALÁRIO LÍQUIDO\n')
console.log('Salário bruto (R$): ' + salarioBruto + '\n');

// Desconto de alíquota do INSS

if (salarioBruto <= 1556.94) {
    
    console.log('Salário bruto até R$ 1.556,94: alíquota de 8%.\n');
    
    saliquotaINSS = (salarioBruto * 0.08);
    salarioBruto = salarioBruto - aliquotaINSS;

} else if ((salarioBruto >= 1556.95) && (salarioBruto <= 2594.92)) {

    console.log('Salário bruto entre R$ 1.556,95 e R$ 2.594,92: alíquota de 9%.\n');
    
    aliquotaINSS = (salarioBruto * 0.09);
    salarioBruto = salarioBruto - aliquotaINSS;

} else if ((salarioBruto >= 2594.93) && (salarioBruto <= 5189.82)) {

    console.log('Salário bruto entre R$ 2.594,93 e R$ 5.189,82: alíquota de 11%\n');
    
    aliquotaINSS = (salarioBruto * 0.11);
    salarioBruto = salarioBruto - aliquotaINSS;

}  else if (salarioBruto > 5189,82 ) {

    console.log('Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88.\n');
    
    aliquotaINSS = (salarioBruto - 570.88);
    salarioBruto = salarioBruto - aliquotaINSS;

}

console.log('Salário bruto - INSS (R$): ' + salarioBruto + '\n');

// Fim Ddesconto de alíquota INSS

// Desconto de alíquota do IR

if (salarioBruto <= 1903.98) {

    console.log('Salário até R$ 1.903,98: isento de imposto de renda.\n');

} else if ((salarioBruto >= 1903.99) && (salarioBruto <= 2826.65)) {

    console.log('Salário entre R$ 1.903,99 e R$ 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto.\n');
    
    aliquotaIR = (salarioBruto * 0.075) - 142.8;
    salarioLiquido = salarioBruto - aliquotaIR;

} else if ((salarioBruto >= 2826.66) && (salarioBruto <= 3751.05)) {

    console.log('Salário entre R$ 2.826,66 e R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto.\n'); 
    
    aliquotaIR = (salarioBruto * 0.15) - 354.8;
    salarioLiquido = salarioBruto - aliquotaIR;

} else if ((salarioBruto >= 3751.6) && (salarioBruto <= 4664.68)) {

    console.log('Salário entre R$ 3.751,06 e R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto.\n');
    
    aliquotaIR = (salarioBruto * 0.225) - 636.13;
    salarioLiquido = salarioBruto - aliquotaIR;

} else if (salarioBruto > 4664.68) {

    console.log('Salário acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.\n');
    
    aliquotaIR = (salarioBruto * 0.275) - 869.36;
    salarioLiquido = salarioBruto - aliquotaIR;

}

console.log('Aliquota IR (R$): ' + aliquotaIR + '\n');
// Fim Ddesconto de aliquota IR

//Salário líquido após descontos
console.log('Salário líquido (R$): ' + salarioLiquido + '\n');