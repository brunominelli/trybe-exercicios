import { Component } from 'react';
import FieldsetBasicInformation from './FieldsetBasicInformation';
import FieldsetLastJob from './FieldsetLastJob';

class FormResume extends Component {
    render() {
        return (
            <form className='container'>
                <FieldsetBasicInformation />
                <FieldsetLastJob />
            </form>
        )
    }
}

export default FormResume;
