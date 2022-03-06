let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerDL = document.getElementById("timerDisplay");
let buttons = document.getElementById("button");
let setup = document.getElementById("setup");
let number = document.getElementsByClassName("number");
let btn = document.getElementById("buttons");
let startTimer = document.getElementById('startTimer');
let pauseTimer = document.getElementById('pauseTimer');
let resetTimer = document.getElementById('resetTimer');
let int = null;
let change = "stopped";
var z = ""


function set() {
    setup.style.display = "none";
    btn.style.display = "flex";
}
function start_Stop() {
    if (int !== null) {
        clearInterval(int);
    }
    if (change === "stopped") {
        int = setInterval(displayTimer, 10);
        startTimer.innerText = "Pause"
        startTimer.style.backgroundColor = ""
        change = "started"

    }
    else {
        clearInterval(int);
        startTimer.innerText = "Continue"
        change = "stopped"
        startTimer.style.backgroundColor = "#1862ec"
    }

}
function reset() {
    clearInterval(int);
    timerDL.innerHTML = '00 : 00 : 00 : 000 ';
    startTimer.innerText = "Start"
    change = "stopped"
    startTimer.style.backgroundColor = "#23d674"
}

function displayTimer() {
    
}


