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

        if (array[day] == 24 || array[day] == 25 || array[day] == 31){
            mounthDay.className = mounthDay.className + ' holiday';
        }

        elementDays.appendChild(mounthDay);
    }
}
calendarDezDays(dezDaysList);

// Exercício 02
function buttonHoliday(string){
    const buttonHoliday = document.createElement('button');
    const buttonsContainer = document.getElementsByClassName('buttons-container');
    buttonHoliday.id = 'btn-holiday';
    buttonHoliday.innerHTML = string;
    console.log(buttonsContainer[0].appendChild(buttonHoliday));
}

buttonHoliday('Feriados');