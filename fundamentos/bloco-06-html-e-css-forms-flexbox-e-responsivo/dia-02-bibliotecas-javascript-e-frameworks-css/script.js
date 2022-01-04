/* Constantes e Variáveis */
const startDate = document.getElementById('start-date');
let message = '';
let fieldsName = [];

/* Validação do Formulário */
validation.init('#form');
startDate.DatePickerX.init({
  format: "dd/mm/yyyy",
});

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

/* Função: validateState
-- Verifica se a pessoa usuário preencheu o estado no formulário */
function validadteState() {
    const elementState = document.getElementById('state');
    if (elementState.value === '') {
      fieldsName.push(elementState.name.toUpperCase());
    }
}

/* Função: validateInputFormFields
-- Verifica se os campos de texto do formulário foram preenchidos pela pessoa usuária */
 function validateInputFormFields() {
  const elementsInput = document.getElementsByTagName('input');
  const elementsTextarea = document.getElementsByTagName('textarea')[0];

  for (let index = 0; index < elementsInput.length; index += 1) {
    if (elementsInput[index].type === 'text' && elementsInput[index].value === '') fieldsName.push(elementsInput[index].name.toUpperCase());
    if (elementsInput[index].type === 'email' && elementsInput[index].value === '') fieldsName.push(elementsInput[index].name.toUpperCase());
  }

  if (elementsTextarea.value === '') {
    fieldsName.push(elementsTextarea.name.toUpperCase());
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
    elementDivMessage.innerText = 'Todos os campos são obrigatórios!';
  }
}

/* Função: printForm()
-- Imprime em uma DIV o resultado do formulário preenchido pela pessoa usuária */
function printForm() {
  const elementDivMessage = document.getElementById('message');
  const elementsInput = document.getElementsByTagName('input');
  const elementsSelect = document.getElementsByTagName('select')[0];
  const elementsTextarea = document.getElementsByTagName('textarea')[0];
  const home = document.getElementsByName('residencia');
  let elementHome = '';
  if (home[0].checked) {
    elementHome = home[0].value.toUpperCase();
  } else elementHome = home[1].value.toUpperCase();

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
  message = '';
  fieldsName = [];
}

/* Função: checkForm
-- Impede o comportamento padrão do formulário por meio do botão de submissão do formulário */
function checkForm(event) {
  event.preventDefault();
  validateInputFormFields();
  validadteState();
  console.log(fieldsName);
  printForm();
}

/* Execução do script após o carregamento da página. */
window.onload = () => {
  setStates();

  const buttonClear = document.getElementById('button-clear');
  buttonClear.addEventListener('click', clearForm);

  const buttonSubmit = document.getElementById('button-submit');
  buttonSubmit.addEventListener('click', checkForm);
}