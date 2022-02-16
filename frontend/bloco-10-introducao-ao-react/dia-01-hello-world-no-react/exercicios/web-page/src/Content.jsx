import { Component } from 'react';

const conteudos = [
  {
   conteudo: 'High Order Functions',
   bloco: 8,
   status: 'Aprendido'
  },
  {
   conteudo: 'Composicao de Componentes',
   bloco: 11,
   status: 'Aprendendo',
  },
  {
   conteudo: 'Composicao de Estados',
   bloco: 12,
   status: 'Aprenderei'
  },
  {
   conteudo: 'Redux',
   bloco: 16,
   status: 'Aprenderei'
  },
 ];

class Content extends Component {
  render () {
    return (
      <main className='content'>
          {conteudos.map((element) => (
              <section key={element.conteudo} className=''>
                  <h2>{`O conteúdo é: ${element.conteudo}`}</h2>
                  <p>{`Status: ${element.status}`}</p>
                  <p>{`Bloco: ${element.bloco}`}</p>
              </section>
            ))}
      </main>
    );
  };
}

export default Content;