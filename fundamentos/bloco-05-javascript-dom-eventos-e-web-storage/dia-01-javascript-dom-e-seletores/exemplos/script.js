const headerContainer = document.getElementById('header-container');
headerContainer.style.backgroundColor = "#4AB16A";

const emergencyTasks = document.getElementsByClassName('emergency-tasks');
emergencyTasks[0].getElementsByTagName('h3')[0].style.backgroundColor = "#AD7BF4";
emergencyTasks[0].getElementsByTagName('div')[0].style.backgroundColor = "#FB9F84";

emergencyTasks[0].getElementsByTagName('h3')[1].style.backgroundColor = "#AD7BF4";
emergencyTasks[0].getElementsByTagName('div')[1].style.backgroundColor = "#FB9F84";


const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks');
noEmergencyTasks[0].getElementsByTagName('h3')[0].style.backgroundColor = "#232525";
noEmergencyTasks[0].getElementsByTagName('div')[0].style.backgroundColor = "#F9DB5E";

noEmergencyTasks[0].getElementsByTagName('h3')[1].style.backgroundColor = "#232525";
noEmergencyTasks[0].getElementsByTagName('div')[1].style.backgroundColor = "#F9DB5E";

const footerContainer = document.getElementById('footer-container');
footerContainer.style.backgroundColor = "#093533";