import { Component } from 'react';
import states from '../data/states';

class FieldsetBasicInformation extends Component {
  render(){
    return(
      <fieldset className='fieldset'>
        <legend>Informações Básicas</legend>
        <input className='input-form' type='text' maxLength='40' placeholder='Nome' required/>
        <input className='input-form' type='email' maxLength='50' placeholder='Email' required/>
        <input className='input-form' type='text' maxLength='11' placeholder='CPF' required/>
        <input className='input-form' type='text' maxLength='200' placeholder='Endereço' required/>
        <select className='input-form'>
          { states.map((state) =>
            <option value={ state }>{ state }</option>)
          };
        </select>
        <div className='fieldset-row'>
          <label className='input-form' for='house'>
            <span>Casa</span>{' '}
            <input type='radio' id='house' name='residence' checked/>
          </label>
          <label className='input-form' for='apartment'>
            <span>Apartamento</span>{' '}
            <input type='radio' id='apartment' name='residence' />
          </label>
        </div>
      </fieldset>
    );
  }
}

export default FieldsetBasicInformation;
