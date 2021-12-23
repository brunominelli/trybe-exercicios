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

function setElementOption () {
    for (let index = 0; index < arrayEstados.length; index += 1) {
        const elementOption = document.createElement('option');
        elementOption.innerText = arrayEstados[index];
        elementOption.value = arrayEstados[index].toLowerCase();
        elementSelect.appendChild(elementOption);
    }
}

setElementOption();