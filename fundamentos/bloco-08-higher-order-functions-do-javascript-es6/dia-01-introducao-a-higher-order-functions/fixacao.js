const wakeUp = () => 'Acordando!!';
const coffeeTime = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir';

const doingThings = (action) => console.log(action());

doingThings(wakeUp);
doingThings(coffeeTime);
doingThings(sleep);