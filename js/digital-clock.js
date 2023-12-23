function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes() 
    const seconds = now.getSeconds();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    
    const formatHour = hours < 10 ? '0' + hours : hours;
    const formatMinute = minutes < 10 ? '0' + minutes : minutes;
    const formatSecond = seconds < 10 ? '0' + seconds : seconds;
    const formatData = `${day}/${month}/${year}`;
    
    document.getElementById('time').textContent = `${formatHour}:${formatMinute}:${formatSecond}`;
    document.getElementById('date').textContent = formatData;
    updateMessage(hours)
    
}

function updateMessage(hours) {
    let message = ''
    if (hours >= 0 && hours <= 7) {
        message = 'Es hora de descansar. Apaga y sigue mañana.';
    } else if (hours >= 7 && hours <= 12) {
        message = 'Buenos días, desayuna fuerte y a darle al código.';
    } else if (hours >= 12 && hours <= 14) {
        message = 'Echa un rato más pero no olvides comer.';
    } else if (hours >= 14 && hours <= 16) {
        message = 'Espero que hayas comido.';
    } else if (hours >= 16 && hours <= 18) {
        message = 'Buenas tardes, el último empujón.';
    } else if (hours >= 18 && hours <= 22) {
        message = 'Esto ya son horas extras, ... piensa en parar pronto.';
    } else {
        message = 'Buenas noches, es hora de pensar en parar y descansar.';
    }
    document.getElementById('message').textContent = message
}

setInterval(updateClock, 1000);
updateClock();

