let seconds = 00;
let tens = 00;
let mins = 00;
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let getMins = document.querySelector('.mins');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let btnLap = document.querySelector('.btn-lap'); // Add Lap button
let lapContainer = document.querySelector('.lap-times'); // Container for laps


let interval;

btnStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
})
btnStop.addEventListener('click', () => {
    clearInterval(interval);
})
btnReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    mins = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    getMins.innerHTML = mins;
    lapContainer.innerHTML = '';
})
btnLap.addEventListener('click', () => {
    captureLapTime();
});


function startTimer(){
    tens++;
    if(tens <= 9){
        getTens.innerHTML = '0' + tens;
    }
    if(tens > 9){
        getTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + 0;
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        mins++;
        getMins.innerHTML = '0' + mins;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    }
    if(mins > 9){
        getSeconds.innerHTML = mins;
    }
}
function captureLapTime() {
    let lapTime = `${mins < 10 ? '0' + mins : mins}:${seconds < 10 ? '0' + seconds : seconds}:${tens < 10 ? '0' + tens : tens}`;
    let lapElement = document.createElement('li');
    lapElement.innerText = lapTime;
    lapContainer.appendChild(lapElement);
}












