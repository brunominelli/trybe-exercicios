/* EXERCÍCIOS PARTE 1 - OBJETOS E FOR/IN */
console.log('\nEXERCÍCIOS PARTE 1 - OBJETOS E FOR/IN');
let key;
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};

// Exercício 01
console.log('EXERCÍCIO 01');
console.log('Bem-vinda, ' + info.personagem);

// Exercício 02
console.log('\nEXERCÍCIO 02');
console.log(info);

// Exercício 03
console.log('\nEXERCÍCIO 03');
for(key in info){
    console.log(key);
}

// Exercício 04
console.log('\nEXERCÍCIO 04');
for(key in info){
    console.log(info[key]);
}

// Exercício 05
console.log('\nEXERCÍCIO 05');
let infoTwo = {
    personagem: 'Tio Patinhas',
    origem: "'Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}


for (key in info) {
    if (key === 'recorrente' && info[key] === 'Sim' && infoTwo[key] === 'Sim') {
        console.log('Ambos recorrentes');
    } else console.log(info[key] + ' e ' + infoTwo[key]);
}

// Exercício 06
console.log('\nEXERCÍCIO 06');
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      // Exercício 07
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
      }
    ],
  };

  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama '+ leitor.livrosFavoritos[0].titulo);

// Exercício 08
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');

/* EXERCÍCIOS PARTE 2 - FUNÇÕES */
// Exercício 01
console.log('\nEXERCÍCIOS PARTE 2 - FUNÇÕES');

console.log('\nExercício 01 - Verifica Palíndromo');

function verificaPalindromo(palavra) {
  for (let index in palavra) {
    if (palavra[index] != palavra[(palavra.length - 1) - index]) {
      return false;
    } else return true;
  }
}

console.log('Arara: ' + verificaPalindromo('arara'));
console.log('Desenvolvimento: ' + verificaPalindromo('desenvolvimento'));

// Exercício 02
console.log('\nExercício 02 - Maior Índice');

const arrayMaiorIndice = [2, 3, 6, 7, 10, 1];

function maiorIndice (array) {
  let maiorIndice = 0;
  for(let index in array){
    if(array[maiorIndice] < array[index]) maiorIndice = index;
  }
  return maiorIndice;
}
console.log('Lista de numeros: ' + arrayMaiorIndice)
console.log('Maior índice: ' + maiorIndice(arrayMaiorIndice));

// Exercício 03
console.log('\nExercício 03 - Menor Índice');

const arrayMenorIndice = [2, 4, 6, 7, 10, 0, -3];

function menorIndice(array) {
  let menorIndice = 0;
  for(let index in array){
    if(array[menorIndice] > array[index]) menorIndice = index;
  }
  return menorIndice;
}
console.log('Lista de Numeros: '+ arrayMenorIndice);
console.log('Menor indice: ' + menorIndice(arrayMenorIndice));

// Exercício 04
console.log('\nExercício 04 - Maior Nome');

const arrayNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(array) {
  let maiorNome = array[0];
  for(let index in array){
    if(maiorNome.length < array[index].length) maiorNome = array[index];
  }
  return maiorNome;
}
console.log('Lista de nomes: ' + arrayNomes);
console.log('Maior nome: ' + maiorNome(arrayNomes));

// Exercício 05
console.log('\nExercício 05 - Maior Ocorrência');

const arrayMaiorOcorrencia = [2, 3, 2, 5, 8, 2, 3];

function verificarMaiorOcorrencia(array){
  let contOcorrencia = 0;
  let contValor = 0;
  let indexValor = 0;

  for(let firstIndex in array){
    let verificarOcorrencia = array[firstIndex];
    for(let secondIndex in array) {
      if (verificarOcorrencia === array[secondIndex]) contValor++;
    }
    if (contValor > contOcorrencia) {
      contOcorrencia = contValor;
      indexValor = firstIndex;
    }
    contValor = 0;
  }
  return array[indexValor];
}

console.log('Lista de números: ' + arrayMaiorOcorrencia);
console.log('Maior Ocorrência: ' + verificarMaiorOcorrencia(arrayMaiorOcorrencia));

// Exercício 06
console.log('\nExercício 06 - Somatória');

const n = 5;

function somatoria(n){
  let resultado = 0;
  for(let i = n; i > 0; i--){
    resultado += i;
  }
  return resultado
}

console.log('A somatória de ' + n + ' é ' + somatoria(n));

// Exercício 07
console.log('\nExercício 07 - É o final da palavra?');

const word = 'trybe';
const ending = 'be';

function verificaFinalDaPalavra(word, ending){
  word = word.split('');
  ending = ending.split('');
  let status = true;
  
  for(let i = 0; i < ending.length; i++){
    if(word[word.length - ending.length + i] != ending[i]) status = false;
  }
  return status;
}

console.log('Palavra: ' + word + ' | Final da palavra: ' + ending);
console.log('Resultado: ' + verificaFinalDaPalavra(word,ending));

/* ---------------------------------------------------------------- */

/* BÔNUS */
// Exercício 01
console.log('\nBônus 01 - Romanos para Decimal');

const numero = 'MXMIX';

const algarismosRomanos = {
  i: 1, 
  v: 5, 
  x: 10, 
  l: 50, 
  c: 100, 
  d: 500, 
  m: 1000
}

function converterRomanosParaDecimal(numero){
  numero = numero.toLowerCase();
  numero = numero.split('');
  const stringNumero = numero.length;
  let resultado = algarismosRomanos[numero[stringNumero - 1]];
  let valorSomado = algarismosRomanos[numero[stringNumero - 1]];
  
  for (let index = 2; index <= stringNumero; index++){
    const algarismo = algarismosRomanos[numero[stringNumero - index]];
    if (valorSomado <= algarismo) {
      resultado += algarismo;
    } else resultado -= algarismo;

    valorSomado = algarismo;
  }

  return resultado;
}
console.log('Número Romano.: ' + numero);
console.log('Número Decimal: ' + converterRomanosParaDecimal(numero));

// Exercício 02
const vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

console.log('\nBônus 02 - Array de Números Pares');
function arrayOfNumbers(vector){
  const evenNumbers = [];

  for(let i = 0; i < vector.length; i++){
    const arrays = vector[i];

    for(let j = 0; j < arrays.length; j++){
      const numbers = arrays[j];
      
      if(arrays[j] % 2 === 0){
        evenNumbers.push(numbers);
      }
    }
  }
  return evenNumbers;
}

console.log('Vetor........: ' + vector);
console.log('Números Pares: ' + arrayOfNumbers(vector));

// Exercício 03
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

const newBasket = {};

console.log('\nBônus 03 - Cesta de Frutas')
for(let i = 0; i < basket.length; i++){
  const fruit = basket[i];
  if (!newBasket[fruit]) newBasket[fruit] = 0;
  newBasket[fruit]++;
}

const result = [];
for(let fruits in newBasket){
  let message = `${newBasket[fruits]} ${fruits}`;
  if (newBasket[fruits] > 1) message += 's';
  result.push(message);
}

console.log(`Sua cesta possui:  ${result.join(', ')}.`);

// Objeto dos exercícios bõnus 04 e 05
let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

// Exercício 04
console.log('O morador de nome ' 
            + moradores.blocoDois[1].nome + ' ' 
            + moradores.blocoDois[1].sobrenome + ' mora no ' 
            + moradores.blocoDois[1].andar + 'º andar, apartamento ' 
            + moradores.blocoDois[1].apartamento + '.');

// Exercício 05

console.log(moradores.blocoUm[0].nome + ' ' + moradores.blocoUm[0].sobrenome);

console.log('\nMoradores do Bloco 01');
for(let i = 0; i < moradores.blocoUm.length; i++){
    console.log(moradores.blocoUm[i].nome + ' ' + moradores.blocoUm[i].sobrenome);
}

console.log('\nMoradores do Bloco 02');
for(let i = 0; i < moradores.blocoUm.length; i++){
  console.log(moradores.blocoDois[i].nome + ' ' + moradores.blocoDois[i].sobrenome);
}