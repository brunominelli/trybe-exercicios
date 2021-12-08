function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercício 01
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function calendarDezDays(array) {
    for (let day in array) {
        const mounthDay = document.createElement('li');
        let elementDays = document.getElementById('days');
        mounthDay.innerHTML = array[day];
        mounthDay.className = 'day';

        if (array[day] == 4 || array[day] == 11 || array[day] == 18 || array[day] == 25) {
            mounthDay.className = mounthDay.className + ' friday';
        }

        if (array[day] == 24 || array[day] == 25 || array[day] == 31) {
            mounthDay.className = mounthDay.className + ' holiday';
        }

        elementDays.appendChild(mounthDay);
    }
}
calendarDezDays(dezDaysList);

// Exercício 02
function buttonHoliday(string) {
    const buttonHoliday = document.createElement('button');
    const buttonsContainer = document.getElementsByClassName('buttons-container');
    buttonHoliday.id = 'btn-holiday';
    buttonHoliday.innerHTML = string;
    buttonsContainer[0].appendChild(buttonHoliday);
}
buttonHoliday('Feriados');

// Exercício 03
function onClickButtonHoliday() {
    let buttonHoliday = document.getElementById('btn-holiday');
    let elementClassHoliday = document.getElementsByClassName('holiday');
    let backgroundColor = 'rgb(238,238,238)';
    let color = 'white';
    
    buttonHoliday.addEventListener('click', function() {
        for (let index = 0; index < elementClassHoliday.length; index += 1) {
            if (elementClassHoliday[index].style.backgroundColor === color) {
                elementClassHoliday[index].style.backgroundColor = backgroundColor;
            } else elementClassHoliday[index].style.backgroundColor = color;
        }
    });
    
}
onClickButtonHoliday();

// Exercício 04
function createButtonFriday(string) {
    const buttonFriday = document.createElement('button');
    const elementClassFriday = document.getElementsByClassName('buttons-container');
    buttonFriday.id = 'btn-friday';
    buttonFriday.innerHTML = string;
    elementClassFriday[0].appendChild(buttonFriday);
}
createButtonFriday('Sexta-Feira');

// Exercício 05
let array = [4, 11, 18, 25];
function onClickButtonFriday(array) {
    let buttonFriday = document.getElementById('btn-friday');
    let elementClassFriday = document.getElementsByClassName('friday');
    let string = "'It's friday then!' - Mufasa";

    buttonFriday.addEventListener('click', function() {
        for (let index = 0; index < elementClassFriday.length; index += 1) {
            if (elementClassFriday[index].innerHTML !== string) {
                elementClassFriday[index].innerHTML = string;
            } else elementClassFriday[index].innerHTML = array[index];
        }
    })
}
onClickButtonFriday(array);

// Exercício 06
function zoomIn() {
    let elementDays = document.getElementById('days');

    elementDays.addEventListener('mouseover', function(event) {
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = '300';
    });
}
zoomIn();

function zoomOut() {
    let elementDays = document.getElementById('days');

    elementDays.addEventListener('mouseout', function(event) {
        event.target.style.fontSize = '20px';
        event.target.style.fontWeight = '200';
    });
}
zoomOut();

// Exercício 07
function addTask(string) {
    const elementMyTasks = document.getElementsByClassName('my-tasks');
    const elementTask = document.createElement('span');

    elementTask.innerHTML = string;
    elementMyTasks[0].appendChild(elementTask);
}
addTask('Cozinhar');

// Exercício 08
function addSubtitle(string) {
    const elementMyTasks = document.getElementsByClassName('my-tasks');
    const elementTasks = document.createElement('div');

    elementTasks.className = 'task';
    elementTasks.style.backgroundColor = string;
    elementMyTasks[0].appendChild(elementTasks);
}
addSubtitle('purple');

// Exercício 09
function addClassTaskSelected() {
    const elementTask = document.getElementsByClassName('task');
    const elementTaskSelected = document.getElementsByClassName('task selected');

    elementTask[0].addEventListener('click', function(event) {
        if (elementTaskSelected.length === 0) {
            event.target.className = 'task selected';
        } else event.target.className = 'task';
    });
}
addClassTaskSelected();

// Exercício 10
function addDayTaskColor() {
    const elementDays = document.getElementById('days');
    const elementTaskSelected = document.getElementsByClassName('task selected');
    const elementTask = document.getElementsByClassName('task');
    const elementTaskColor = elementTask[0].style.backgroundColor;

    elementDays.addEventListener('click', function(event) {
        let eventColor = event.target.style.color;
        if (elementTask.length > 0 && elementTaskColor !== eventColor) {
            event.target.style.color = elementTaskColor;
        } else if (eventColor === elementTaskColor && elementTaskSelected !== 0) {
            event.target.style.color = 'rgb(119,119,119)';
        }
    });
}
addDayTaskColor();

// Exercício Bônus
function addNewTask() {
    let elementTaskInput = document.getElementById('task-input');
    let elementButtonAdd = document.getElementById('btn-add');
    let elementTaskList = document.getElementsByClassName('task-list');

    elementButtonAdd.addEventListener('click', function() {
        if (elementTaskInput.value.length > 0) {
            let elementList = document.createElement('li');
            elementList.innerText = elementTaskInput.value;

            elementTaskList[0].appendChild(elementList);
            elementTaskInput.value = '';
        } else alert('Error: Insira alguma tarefa.');
    });

    elementTaskInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter' && elementTaskInput.value.length > 0) {
            let elementList = document.createElement('li');
            elementList.innerHTML = elementTaskInput.value;

            elementTaskList[0].appendChild(elementList);
            elementTaskInput.value = '';
        }
    });
}
addNewTask();