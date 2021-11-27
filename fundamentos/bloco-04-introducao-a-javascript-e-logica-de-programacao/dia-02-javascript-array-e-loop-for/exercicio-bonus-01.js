let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Bônus 01
console.log('\nBônus 01 - Bubble Sort - Ordem Crescente');

let i, j, posicao;

for (i = numbers.length - 1; i > 0; i--){ 

    for (j = 0; j < i; j++) {

        if (numbers[j] > numbers[j+1]) {

            posicao = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = posicao;
        }
    }
}

console.log('Buble Sort: ' + numbers);