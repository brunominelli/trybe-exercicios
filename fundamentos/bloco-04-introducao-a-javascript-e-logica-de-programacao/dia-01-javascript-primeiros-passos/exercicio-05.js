const a = 90;
const b = 60;
const c = 30;


console.log('UM TRIÂNGULO BEM MASSA, FERA!\n');

if(a <= 0 || b <= 0 || c <= 0){
    console.log('Não se aplica! Ângulo negativo ou nulo.')
}else if ((a + b + c) < 180){
    console.log('Não se aplica! A soma dos ângulos não completa 180°.');
}else if ((a + b + c) > 180){
    console.log('Não se aplica! A soma dos ângulos ultrapassa 180°.');
}else if ((a + b + c) == 180){
    console.log('Parabéns! Você desenhou um triângulo bem massa, fera!');
}