/* Variáveis */

const myName = "Bruno Minelli de Almeida";
const birthCity = "São João da Boa Vista";
let birthYear = "1997";

// birthYear = "2030";
// birthCity = "São Paulo";

// console.log(myName + " " + birthCity + " " + birthYear);

// 6. Resposta: O erro acontece porque birthCity foi declarada como uma constante e, por isso, ela não pode ter seu valor original atualizado por meio de uma segunda atribuição.

/*------------------------------------------------------------*/

/* Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas */

let patientId = '50';
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';
/*
console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
console.log(typeof patientAge);
*/


/*------------------------------------------------------------*/

// Exercício
const base = 5;
const height = 8;
const area = base * height;
const perimeter = (2 * base) + (2 * height);

/*console.log('Base: '+ base 
            +'\nAltura: '+ height 
            +'\nArea: ' + area
            +'\nPerímetro: ' + perimeter);*/

/*------------------------------------------------------------*/

/* Condições If e Else */

/*------------------------------------------------------------*/

// Exercício
const score = 80;

/*if(score >= 80){
    console.log('Parabéns! você foi aprovado(a)!');
}else if(score < 80 && score >= 60) {
    console.log('Você está na nossa lista de espera.');

}else console.log('Vocẽ foi reprovado(a).');*/

/*------------------------------------------------------------*/

/* Operadores Lógicos */

// Exemplo 01
const comida = 'pão na chapa';
const bebida = 'cafézinho';

/*if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}*/

/*------------------------------------------------------------*/

// Exemplo 02
const conditionOne = true;
const conditionTwo = false;

//console.log(conditionOne && conditionTwo);

/*------------------------------------------------------------*/

// Exemplo 03
const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;
// console.log( typeof listaDeCompras);

/*------------------------------------------------------------*/

// Exemplo 04 - Operador AND
/*
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false*/

/*------------------------------------------------------------*/

// Exercício
const currentHour = 22;
let message = '';

if (currentHour >= 22) {
    message = 'Não deveríamos comer nada, é hora de dormir';
}else if (currentHour >= 18 && currentHour < 22) {
    message = 'Rango da noite, vamos jantar :D';
}else if (currentHour >= 14 && currentHour < 18) {
    message = 'Vamos fazer um bolo pro café da tarde?';
}else if (currentHour >= 11 && currentHour < 14){
    message = 'Hora do almoço!!!';
}else message = 'Hmmm, cheiro de café recém passado.';

// console.log(message);

/*------------------------------------------------------------*/

// Exemplo 05
const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

/*if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}*/

// Exemplo 06 - Operador OR
/*console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false*/

/*------------------------------------------------------------*/

// Exercício

let weekDay = 'sábado';

/*if(weekDay == 'segunda-feira' || weekDay == 'terça-feira' || weekDay == 'quarta-feira' || weekDay == 'quinta-feira' || weekDay == 'sexta-feira'){
    console.log('Oba, mais um dia de aprendizado na Trybe >:D');
}else console.log('FINALMENTE, descanso merecido UwU');*/

/*------------------------------------------------------------*/

// Operador NOT
// Strings
const squirtle = "melhor pokemon inicial";

// console.log(!squirtle); // false

/*------------------------------------------------------------*/
// Números
// console.log(!42); // false

// console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.

/*------------------------------------------------------------*/
// Nulos
// console.log(!null); // true

/*------------------------------------------------------------*/
//Indefinidos
// console.log(!undefined); // true

/* Switch e Case */
// Exercício

let situacao = 'lista';
switch (situacao){
    case 'aprovada':
        console.log(situacao);
        break;
    case 'lista':
        console.log(situacao);
        break;
    case 'reprovada':
        console.log(situacao);
        break;
    default:
        console.log('não se aplica.')
}