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


function validateFormFields() {
  const elementsInput = document.getElementsByTagName('input');
  const elementsTextarea = document.getElementsByTagName('textarea')[0];
  const elementsLabel = document.getElementsByTagName('label');
  let color = 'black';
  let message = 'Preencha todos os campos obrigatórios!';

  for (let index = 0; index < elementsInput.length; index += 1) {
    // console.log(elementsInput[index]);
    // console.log(elementsLabel[10]);

    if (elementsInput[index].type === 'text') {
      if (elementsInput[index].value === '') {
        color = 'red';
        elementsInput[index].style.borderColor = color;
      } else if (elementsInput[index].value !== '') {
        elementsInput[index].style.borderColor = color;
      }
    }

    if (elementsInput[index].type === 'email') {
      color = 'red';
      elementsInput[index].style.borderColor = color;
    } else if (elementsInput[index].value !== '') {
      elementsInput[index].style.borderColor = color;
    }

    if (elementsTextarea.value === '') {
        color = 'red';
        elementsTextarea.style.borderColor = color;
    } else if (elementsTextarea.value !== '') {
        elementsTextarea.style.borderColor = color;
    }
  }
  
  return alert(message);
}

/* Função: clearForm
-- Limpa todos os campos do formulário */
function clearForm() {
  const formElements = document.getElementsByTagName('input');
  const elementTextarea = document.getElementsByTagName('textarea')[0];

  for (let index = 0; index < formElements.length; index += 1) {
    let data = formElements[index];
    data.value = '';
    elementTextarea.value = '';
  }
}

/* Função: checkForm
-- Impede o comportamento padrão do formulário por meio do botão de submissão do formulário */
function checkForm(event) {
  event.preventDefault();
  validateFormFields(event);

}

/* Execução do script apó o carregamento da página. */
window.onload = () => {
  setStates();
  
  const buttonClear = document.getElementById('button-clear');
  buttonClear.addEventListener('click', clearForm);

  const buttonSubmit = document.getElementById('button-submit');
  buttonSubmit.addEventListener('click', checkForm);
}