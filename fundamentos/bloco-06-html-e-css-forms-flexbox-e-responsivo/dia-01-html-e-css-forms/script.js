const elementInitialDate = document.getElementById('data-inicio');
const elementSubmitButton = document.getElementById('botao-enviar');

/* Função: setElementOption
-- Iunclui todos os estados do Brasil na tag Select */
function setStates() {
    const elementState = document.getElementById('state');
    const arrayStates = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

    for (let index = 0; index < arrayStates.length; index += 1) {
        const elementOption = document.createElement('option');
        elementOption.innerText = arrayStates[index];
        elementOption.value = arrayStates[index].toLowerCase();
        elementState.appendChild(elementOption);
    }
}

function clearForm() {
    const formElements = document.getElementsByTagName('input');
    const elementTextarea = document.getElementsByTagName('textarea');

    for (let index = 0; index < formElements.length; index += 1) {
        let data = formElements[index];
        data.value = '';
        elementTextarea.value = '';
    }
}

function checkForm(event) {
    event.preventDefault();
}

window.onload = () => {
    setStates();
    
    const buttonClear = document.getElementById('button-clear');
    buttonClear.addEventListener('click', clearForm);

    const buttonSubmit = document.getElementById('button-submit');
    buttonSubmit.addEventListener('click', checkForm);
}