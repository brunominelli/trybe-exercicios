/* Constantes e Variáveis */
const startDate = document.getElementById('start-date');
let message = '';
let fieldsName = [];

/* Validação do Formulário */
validation.init('#form');
startDate.DatePickerX.init();
console.log(validation.init('#form'));

/* Função: setElementOption
-- Iunclui todos os estados do Brasil na tag Select */
function setStates() {
  const elementState = document.getElementById('state');
  const arrayStates = ['', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let index = 0; index < arrayStates.length; index += 1) {
    const elementOption = document.createElement('option');
    elementOption.innerText = arrayStates[index];
    elementOption.value = arrayStates[index].toLowerCase();
    elementState.appendChild(elementOption);
  }
}

/* Função: clearForm
-- Limpa todos os campos do formulário */
function clearForm() {
  const formElements = document.getElementsByTagName('input');
  const elementTextarea = document.getElementsByTagName('textarea')[0];
  const elementDivMessage = document.getElementById('message');
  const elementSelectState = document.getElementById('state');

  for (let index = 0; index < formElements.length; index += 1) {
    let data = formElements[index];
    data.value = '';
    data.style.borderColor = '';
    elementTextarea.value = '';
    elementTextarea.style.borderColor = '';
    elementSelectState.style.borderColor = '';
    elementDivMessage.innerText = 'Todos os campos são obrigatórios';
  }
}

/* Função: checkForm
-- Impede o comportamento padrão do formulário por meio do botão de submissão do formulário */
function checkForm(event) {
  event.preventDefault();

  const elementDivMessage = document.getElementById('message');
  const elementsInput = document.getElementsByTagName('input');
  const elementsSelect = document.getElementsByTagName('select')[0];
  const elementsTextarea = document.getElementsByTagName('textarea')[0];
  const home = document.getElementsByName('residencia');
  let elementHome = '';

  if (home[0].checked) {
    elementHome = home[0].value.toUpperCase();
  } else elementHome = home[1].value.toUpperCase();

  console.log(elementsInput);
  console.log(elementsSelect);
  console.log(elementsTextarea);

  if (fieldsName.length !== 0) {
      message = `Preencha todos os campos obrigatórios: \n\n ${fieldsName}`; 
      elementDivMessage.innerText = message;
  } else {
      elementDivMessage.innerText = `
      ${elementsInput[0].name.toUpperCase()}: ${elementsInput[0].value.toUpperCase()}
      ${elementsInput[1].name.toUpperCase()}: ${elementsInput[1].value.toUpperCase()}
      ${elementsInput[2].name.toUpperCase()}: ${elementsInput[2].value.toUpperCase()}
      ${elementsInput[3].name.toUpperCase()}: ${elementsInput[3].value.toUpperCase()}
      ${elementsInput[4].name.toUpperCase()}: ${elementsInput[4].value.toUpperCase()}
      ${elementsSelect.name.toUpperCase()}: ${elementsSelect.value.toUpperCase()}
      ${elementsInput[5].name.toUpperCase()}: ${elementHome}
      ${elementsInput[7].name.toUpperCase()}: ${elementsInput[7].value.toUpperCase()}
      ${elementsInput[8].name.toUpperCase()}: ${elementsInput[8].value.toUpperCase()}
      ${elementsInput[9].name.toUpperCase()}: ${elementsInput[9].value.toUpperCase()}
      ${elementsTextarea.name.toUpperCase()}: ${elementsTextarea.value.toUpperCase()}
      `;
  }
  console.log(elementDivMessage.innerText);
  message = '';
  fieldsName = [];
}

/* Execução do script após o carregamento da página. */
window.onload = () => {
  setStates();
  
  const buttonClear = document.getElementById('button-clear');
  buttonClear.addEventListener('click', clearForm);

  const buttonSubmit = document.getElementById('button-submit');
  buttonSubmit.addEventListener('click', checkForm);
}