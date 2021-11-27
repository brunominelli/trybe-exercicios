const pawn = 'peão';
const tower = 'torre';
const knight = 'cavalo';
const bishop = 'bispo';
const queen = 'rainha';
const king = 'rei';

let piece = '';

console.log('XADREZ - O MOVIMENTO É...\n');

if (piece.toLowerCase() === pawn) {

    console.log('Peão: O movimento é frontal, mas o ataque é na diagonal.');

} else if (piece.toLowerCase() === tower) {

    console.log('Torre: O movimento é frontal e lateral assim como o ataque.');

} else if (piece.toLowerCase() === knight) {

    console.log('Cavalo: O movimento é em L assim como o ataque.');

} else if (piece.toLowerCase() === bishop) {

    console.log('Bispo: O movimento é transversal assim como o ataque.');

} else if (piece.toLowerCase() === queen) {

    console.log('Rainha: O movimento é o que ela quiser em uma direção porque ela é a Rainha assim como o ataque.');

} else if (piece.toLowerCase() === king) {

    console.log('Rei: O movimento é o que ele quiser em uma direção, mas só pode dar um passo de cada vez.');
    
} else console.log('O movimento é... não tem movimento não.');
