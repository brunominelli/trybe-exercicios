const elementSelect = document.getElementById('estado');
const arrayEstados = ['Acre',
                     'Alagoas',
                     'Amapá',
                     'Amazonas',
                     'Bahia',
                     'Ceará',
                     'Distrito Federal',
                     'Espírito Santo',
                     'Goiás',
                     'Maranhão',
                     'Mato Grosso',
                     'Mato Grosso do Sul',
                     'Minas Gerais',
                     'Pará',
                     'Paraíba',
                     'Paraná',
                     'Pernambuco',
                     'Piauí',
                     'Rio de Janeiro',
                     'Rio Grande do Norte',
                     'Rio Grande do Sul',
                     'Rondônia',
                     'Roraima',
                     'Santa Catarina',
                     'São Paulo',
                     'Sergipe',
                     'Tocantins'
];

const elementInitialDate = document.getElementById('data-inicio');

/* Função: setElementOption
-- Iunclui todos os estados do Brasil na tag Select */
function setElementOption () {
    for (let index = 0; index < arrayEstados.length; index += 1) {
        const elementOption = document.createElement('option');
        elementOption.innerText = arrayEstados[index];
        elementOption.value = arrayEstados[index].toLowerCase();
        elementSelect.appendChild(elementOption);
    }
}
setElementOption();

function checkDateFormat() {
    const splitDate = elementInitialDate.value.split('/');
    const dia = parseInt(splitDate[0]);
    const mes = parseInt(splitDate[1]);
    const ano = parseInt(splitDate[2]);
    let message = '';

    if (dia < 0 || dia > 31) {
        message = 'Erro: Data inválida! Dia incorreto.';
        alert(message);
    }

    if (mes < 0 || mes > 12) {
        message = 'Erro: Data inválida! Mês incorreto.';
        alert(message);
    }

    if (ano < 0) {
        message = 'Erro: Data inválida! Ano incorreto.';
        alert(message);
    }
}
checkDateFormat();