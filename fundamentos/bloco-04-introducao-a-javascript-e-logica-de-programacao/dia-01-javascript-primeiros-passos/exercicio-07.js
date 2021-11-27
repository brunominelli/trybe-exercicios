const porcentagem = 100;

console.log('CONVERSÃO DE PORCENTAGEM PARA NOTAS (A - F)\n');

if (porcentagem >= 90){
    console.log('Porcentagem: ' + porcentagem + '% | Nota: A');
} else if (porcentagem >= 80){
    console.log('Porcentagem: ' + porcentagem + '% | Nota: B');
}else if (porcentagem >= 70){
    console.log('Porcentagem: ' + porcentagem + '% | Nota: C');
}else if (porcentagem >= 60){
    console.log('Porcentagem: ' + porcentagem + '% | Nota: D');
}else if (porcentagem >= 50){
    console.log('Porcentagem: ' + porcentagem + '% | Nota: E');
}else if (porcentagem < 50){
    console.log('Porcentagem: ' + porcentagem + '% | Nota: F');
}