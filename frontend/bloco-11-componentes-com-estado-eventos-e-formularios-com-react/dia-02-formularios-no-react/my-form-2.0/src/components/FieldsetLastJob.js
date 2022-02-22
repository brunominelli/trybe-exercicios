import { Component } from 'react';

class FieldsetLastJob extends Component {
  render(){
    return(
      <fieldset className='fieldset'>
        <legend>Último Emprego</legend>
        <textarea className='input-form' cols='150' rows='10' placeholder='Currículo Resumido' required/>
        <textarea className='input-form' cols='150' rows='10' placeholder='Cargo' required/>
        <textarea className='input-form' cols='150' rows='10' placeholder='Descrição do Cargo' required/>
      </fieldset>
    );
  }
}

export default FieldsetLastJob;
