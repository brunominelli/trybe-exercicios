/* EXERCÍCIOS PARTE 1 - OBJETOS E FOR/IN */
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
