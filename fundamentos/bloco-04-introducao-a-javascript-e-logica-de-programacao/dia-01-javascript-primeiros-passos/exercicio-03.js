const a = 7;
const b = 5;
const c = 3;

let maior;

if((a > b) && (a > c)){
    maior = a;
} else if ((b > a) && (b > c)){
    maior = b;
} else if ((c > a) && (c > b)){
    maior = c;
}


console.log('MAIOR ENTRE TRÊS NÚMEROS\n');
console.log('O maior número é o número: ' + maior);
