let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerDL = document.querySelector('.timerDisplay');
let int = null;
let change  = "stopped";

let startTimer = document.getElementById('startTimer')
let pauseTimer = document.getElementById('pauseTimer')
let resetTimer = document.getElementById('resetTimer')

function start_Stop() {
    if (int !== null) {
        clearInterval(int);
    }
    if(change === "stopped"){
        int = setInterval(displayTimer, 10);
        startTimer.innerText = "Pause";
        startTimer.style.backgroundColor="";
        change  = "started";
        
    }
    else{
        clearInterval(int);
        startTimer.innerText = "Continue";
        change  = "stopped";
        startTimer.style.backgroundColor="#1862ec";
    }
}
function reset() {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timerDL.innerHTML = '00 : 00 : 00 : 000 ';
    startTimer.innerText = "Start";
    change = "stopped";
    startTimer.style.backgroundColor="#23d674";
}
function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerDL.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}
